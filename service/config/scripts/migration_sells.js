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
const SUBSIDIARY_ID = "5b79c3755526c91360058101";

// from productos db
var productModel = require('../../models/product');
var providerModel = require('../../models/provider');
var clientModel = require('../../models/client');
var userModel = require('../../models/user');

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

async  function doMigration() {

    const clients_with_cars = await clientModel.find({ 'cars.0': {$exists: true}}).catch((err) => {console.log(err)});
    const users = await userModel.find().catch((err) => {console.log(err)});

    const movimientos = await getFromCSV(
        '/brakeone_tables/portales_tables/Movimientos.csv',
        ['IdMovimiento','IdEntidad','IdContacto','TipoMov','Seguridad','Folio','Factura','Factura2','Status','Fecha','Condicion','Servicio','Entrada','Salida','IdVehiculo','Placas','Kms','Personal','IdPersonal','Enlace1','Enlace2','Enlace3','Problema','IdPaquete','ProxServ','ServDias','ServKms','Notificado','Atendido','Observaciones','Reclamo','IdConcepto','Poliza','Siniestro','Usuario','TelFijo','TelMovil','Mail','Documento','Clave','IdProducto','IdCategoria','FormaPago','Banco','Referencia']
    );

    const detalle_movimientos = await getFromCSV(
        '/brakeone_tables/portales_tables/DetalleMovimientos.csv',
        ['IdMovimiento','IdProducto','Partida','Clave','FMSI','Concepto','Servicio','Unidad','Cantidad','Precio','Desc','Costo','Factura','IdEntidad','IdPersonal','Reclamo']
    );

    const pagos = await getFromCSV(
        '/brakeone_tables/portales_tables/Pagos.csv',
        ['IdPago','IdMovimiento','TipoPago','Seguridad','Folio','Fecha','IdPersonal','Status','Entidad','Importe','Saldo','Observaciones','IdEntidad','Enlace1']
    );

    const detalle_pagos = await getFromCSV(
        '/brakeone_tables/portales_tables/DetallePagos.csv',
        ['IdPago','Partida','Monto','FormaPago','Banco','Referencia','OrigenDestino']
    );

    const mapping_cars = {};  // legacy_id => car_id
    clients_with_cars.forEach((client) => {
        client.cars.forEach((car) => {
            mapping_cars[car.legacy_id] = car._id;
        });
    });

    const mapping_users = {}; // legacy_id => user_id
    users.forEach((user) => {
        mapping_users[user.legacy_id] = user._id;
    });

    const ventas = movimientos.filter((el)=>(el.TipoMov === "1"));
    console.log("Total de ventas = " + ventas.length);


}

doMigration().catch((err) => {console.log(err)});

