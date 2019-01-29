var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');
var fs = require('fs'); 
var parse = require('csv-parse');
mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var MongoClient = require('mongodb').MongoClient;

//var DestinyConnect = mongoose.connect("mongodb://BrakeOneService:bmnqdQUObC4AS11i@127.0.0.1:18509/BrakeOne", { useNewUrlParser: true });
var DestinyConnect = mongoose.connect("mongodb://localhost:27017/BrakeOne", { useMongoClient: true });

// VARS:
const SUBSIDIARY_ID = "5c3ccee7a7fc2a43e520fccd";

// from productos db
var productModel = require('../../models/product');
var providerModel = require('../../models/provider');
var clientModel = require('../../models/client');
var userModel = require('../../models/user');
var sellModel = require('../../models/sell');
var paymentModel = require('../../models/payment');


async function getFromCSV(dir, keys) {
    let index = 0;
    const results =  new Promise((resolve, reject) => {
        var objects=[];
        fs.createReadStream( __dirname + dir ).pipe(parse({delimiter: ','})).on('data', (csvrow) => {
            if (index != 0) {
                const newObj = {};
                keys.forEach((k, i) => {
                    newObj[k] = csvrow[i];
                });
                objects.push(newObj);
            } else {
                index++;
            }
        }).on('end',function() {
            console.log("total: " + objects.length);
            console.log(objects[0]);
            resolve(objects);
        });
    });
    return await results.then((r)=>{
        return r;
    });
}

async function doMigration() {

    const clients_with_cars = await clientModel.find({ 'cars.0': {$exists: true}}).catch((err) => {console.log(err)});
    const users = await userModel.find().catch((err) => {console.log(err)});
    const clients = await clientModel.find().catch((err) => {console.log(err)});
    const products = await productModel.find({ subsidiary_id: SUBSIDIARY_ID }).catch((err) => {console.log(err)});

    const movimientos = await getFromCSV(
        '/brakeone_tables/matriz_tables/Movimientos.csv',
        ['IdMovimiento','IdEntidad','IdContacto','TipoMov','Seguridad','Folio','Factura','Factura2','Status','Fecha','Condicion','Servicio','Entrada','Salida','IdVehiculo','Placas','Kms','Personal','IdPersonal','Enlace1','Enlace2','Enlace3','Problema','IdPaquete','ProxServ','ServDias','ServKms','Notificado','Atendido','Observaciones','Reclamo','IdConcepto','Poliza','Siniestro','Usuario','TelFijo','TelMovil','Mail','Documento','Clave','IdProducto','IdCategoria','FormaPago','Banco','Referencia']
    );

    const detalle_movimientos = await getFromCSV(
        '/brakeone_tables/matriz_tables/DetalleMovimientos.csv',
        ['IdMovimiento','IdProducto','Partida','Clave','FMSI','Concepto','Servicio','Unidad','Cantidad','Precio','Desc','Costo','Factura','IdEntidad','IdPersonal','Reclamo']
    );

    const pagos = await getFromCSV(
        '/brakeone_tables/matriz_tables/Pagos.csv',
        ['IdPago','IdMovimiento','TipoPago','Seguridad','Folio','Fecha','IdPersonal','Status','Entidad','Importe','Saldo','Observaciones','IdEntidad','Enlace1']
    );

    const detalle_pagos = await getFromCSV(
        '/brakeone_tables/matriz_tables/DetallePagos.csv',
        ['IdPago','Partida','Monto','FormaPago','Banco','Referencia','OrigenDestino']
    );

    const mapping_products = {};// legacy_id => product_id
    products.forEach((p) => {
        mapping_products[p.legacy_id] = p._id;
    });
    
    const mapping_cars = {};  // legacy_id => car_id
    clients_with_cars.forEach((client) => {
        client.cars.forEach((car) => {
            mapping_cars[car.legacy_id] = car._id;
        });
    });

    const mapping_users = {}; // legacy_id => user_id
    const mapping_users_name = {};  // legacy_id => name
    users.forEach((user) => {
        mapping_users[user.legacy_id] = user._id;
        mapping_users_name[user.legacy_id] = user.name;
    });

    const mapping_clients = {}; // legacy_id => user_id
    const mapping_clients_names = {}; // legacy_id => user_id
    clients.forEach((client) => {
        mapping_clients[client.legacy_id] = client._id;
        mapping_clients_names[client.name] = client._id;
    });

    const mapping_pays_details = {};
    detalle_pagos.forEach((dp)=>{
        if (mapping_pays_details[dp.IdPago]) {
            mapping_pays_details[dp.IdPago].push(dp);
        }else {
            mapping_pays_details[dp.IdPago] = [dp];
        }
    });

    // total actual de servicios 8227   ANALYSIS
    // const mapping_movimientos_type = {};
    // movimientos.forEach((mov) => {
    //     if (mapping_movimientos_type[mov.TipoMov]) {
    //         mapping_movimientos_type[mov.TipoMov] = mapping_movimientos_type[mov.TipoMov] + 1;
    //     } else {
    //         mapping_movimientos_type[mov.TipoMov] = 1;
    //     }
    // });
    // const keysmov = Object.keys(mapping_movimientos_type);
    // console.log("diferentes: " + keysmov.length);
    // keysmov.forEach((key)=>{console.log(key + " => " + mapping_movimientos_type[key])});

    const ventas_servicios = [];
    const ventas_remisiones = {}; // if is remission have pay.
    // servicio => remision

    movimientos.forEach((el) => {
        if (el.TipoMov === "1" && el.Status === "EMITIDO") {
            ventas_servicios.push(el);
        } else if (el.TipoMov === "4") {
            if (ventas_remisiones[el.Servicio]) {
                ventas_remisiones[el.Servicio].push(el);
            } else {
                ventas_remisiones[el.Servicio] = [el];
            }
        }
    });

    console.log("Total de servicios = " + ventas_servicios.length);
    const mapping_detail_sell = {}; // IdMovimiento => Array [DetalleMovimientos]
    detalle_movimientos.forEach((detalle) => {
        if (mapping_detail_sell[detalle.IdMovimiento]) {
            mapping_detail_sell[detalle.IdMovimiento].push(detalle);
        } else {
            mapping_detail_sell[detalle.IdMovimiento] = [detalle];
        }
    });

    const mapping_payments = {};
    pagos.filter((e)=>(e.Status === "EMITIDO")).forEach((pago) => {
        if (mapping_payments[pago.IdMovimiento]) {
            mapping_payments[pago.IdMovimiento].push(pago);
        } else {
            mapping_payments[pago.IdMovimiento] = [pago];
        }
    });

    // let founded  = 0;
    // ventas_remisiones.forEach((vp)=>{
    //     if(mapping_payments[vp.IdMovimiento]){
    //         founded++;
    //     }
    // });
    // console.log("founded: " + founded);

    // Object.keys(ventas_remisiones).forEach((key)=>{
    //     if (ventas_remisiones[key].length > 1) {
    //         console.log(key + ' => ' + ventas_remisiones[key].length);
    //     }
    // });

    ventas_servicios.forEach(async (venta) => {
        const new_sell = new sellModel();
        new_sell.subsidiary_id = SUBSIDIARY_ID;
        new_sell.user_id = mapping_users[venta.IdPersonal];
        new_sell.legacy_id = venta.IdMovimiento;
        new_sell.client_id = mapping_clients[venta.IdEntidad];
        new_sell.legacy_folio = venta.Folio;
        new_sell.folio_fact = venta.Factura;
        if (venta.Factura !== '') {
            new_sell.folio_fact = venta.Factura;
        }
        if (venta.Entrada !== '') {
            const d = venta.Entrada.split('/');
            new_sell.date_in = moment({day: d[0], month: d[1], year: d[2]}).toISOString();
        }
        if (venta.Salida !== '') {
            new_sell.is_finished = true;
            const d = venta.Salida.split('/');
            new_sell.date_out = moment({day: d[0], month: d[1], year: d[2]}).toISOString();
        } else {
            new_sell.is_finished = false;
        }

        new_sell.car_id = mapping_cars[venta.IdVehiculo];
        new_sell.kilometers = venta.Kms;
        new_sell.products = [];

        let total_sell = 0;
        if (mapping_detail_sell[venta.IdMovimiento]) {
            mapping_detail_sell[venta.IdMovimiento].forEach((detalle) => {
                new_sell.products.push({
                    id: mapping_products[detalle.IdProducto],
                    user_id: detalle.IdPersonal !== '' ? mapping_users[detalle.IdPersonal] : '5c3cdfb3e2b3e426d3438fcc',
                    user_name: detalle.IdPersonal !== '' ? mapping_users_name[detalle.IdPersonal] : mapping_users_name['5c3cdfb3e2b3e426d3438fcc'],
                    description: detalle.Concepto,
                    price_type: '',
                    price: Number(detalle.Precio),
                    quantity: Number(detalle.Cantidad),
                    discount: Number(detalle.Desc),
                    total: Number(detalle.Cantidad) * Number(detalle.Precio)
                });
                total_sell += Number(detalle.Cantidad) * Number(detalle.Precio);
            });
        }
        new_sell.total = total_sell;

        if (ventas_remisiones[venta.IdMovimiento]) {
            new_sell.is_remission = true;
            ventas_remisiones[venta.IdMovimiento].forEach((remision) => {
                if (mapping_payments[remision.IdMovimiento]) {
                    new_sell.is_payed = true;
                }
            });
        } else {
            new_sell.is_remission = false;
        }

        const saved_sell = await new_sell.save().catch((err)=>{console.log(err)});
        console.log("saved sell")
        // // after saved sell we need to save the payments: 
        if (ventas_remisiones[venta.IdMovimiento]) {
            ventas_remisiones[venta.IdMovimiento].forEach(async (remision) => {
                if (mapping_payments[remision.IdMovimiento]) {
                    mapping_payments[remision.IdMovimiento].forEach((pay) => {
                        const details = mapping_pays_details[pay.IdPago];
                        details.forEach(async (detail_pay) => {
                            const new_payment = new paymentModel();
                            new_payment.legacy_id = pay.IdPago;
                            new_payment.subsidiary_id = SUBSIDIARY_ID;
                            new_payment.client_id = mapping_clients_names[pay.Entidad];
                            new_payment.user_id = pay.IdPersonal !== '' ? mapping_users[pay.IdPersonal] : '5c3cdfb3e2b3e426d3438fcc';
                            new_payment.sell_id = saved_sell._id;
                            new_payment.legacy_folio = pay.Folio;
                            new_payment.notes = pay.Observaciones;
                            const d = pay.Fecha.split('/');
                            new_payment.date = moment({day: d[0], month: d[1], year: d[2]}).toISOString();
                            new_payment.type = detail_pay.FormaPago;
                            new_payment.bank = detail_pay.Banco;
                            new_payment.reference = detail_pay.Referencia;
                            new_payment.total = Number(detail_pay.Monto.replace(/,/g,'')) !== NaN ? Number(detail_pay.Monto.replace(/,/g,'')) : 0;
                            const saved_pay = await new_payment.save().catch((err)=>{console.log(err)});
                            console.log('saved payment for sell...');
                        });
                    });
                }
            });
        }
    });
}

doMigration().catch((err) => {console.log(err)});

