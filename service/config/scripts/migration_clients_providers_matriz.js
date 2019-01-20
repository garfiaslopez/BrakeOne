var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');

var fs = require('fs'); 
var parse = require('csv-parse');

mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//var DestinyConnect = mongoose.connect("mongodb://BrakeOneService:bmnqdQUObC4AS11i@127.0.0.1:18509/BrakeOne", { useNewUrlParser: true });
var DestinyConnect = mongoose.connect("mongodb://localhost:27017/BrakeOne", { useMongoClient: true });

// VARS:
const ACCOUNT_ID = "5b79c3755526c91360058100";

// from entidades db
var providerModel = require('../../models/provider');
var clientModel = require('../../models/client');

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
        
    var entidades = await getFromCSV(
        '/brakeone_tables/matriz_tables/Entidades.csv',
        ['IdEntidad','Tipo','Seguridad','Nombre','RFC','Direccion','Colonia','Poblacion','Estado','CP','Telefono1','Telefono2','Telefono3','E-mail','Credito','CURP','Precio']
    );

    var contactos = await getFromCSV(
        '/brakeone_tables/matriz_tables/DetalleEntidades.csv',
        ['IdContacto','IdEntidad','Nombre','Puesto','Telefono','E-mail']
    );

    var vehiculos = await getFromCSV(
        '/brakeone_tables/matriz_tables/DetalleVehiculos.csv',
        ['IdVehiculo','IdEntidad','Placas','NumEco','Marca','Modelo','Año','Color','VIN']
    );

    var clientes_sells = await getFromCSV(
        '/brakeone_tables/matriz_tables/ConClientes.csv',
        ['Nombre','Direccion','Ventas','Participacion','SumaVentas','SumaPart']
    );

    var proveedores_sells = await getFromCSV(
        '/brakeone_tables/matriz_tables/ConProveedores.csv',
        ['Nombre','Direccion','Compras','Participacion','SumaCompras','SumaPart']
    );

    const mapping_contactos = {};
    contactos.forEach((contacto) => {
        const newContacto = {
            name: contacto.Nombre,
            job_role: contacto.Puesto,
            phone_mobil: contacto.Telefono,
            email: contacto['E-mail']
        }
        if (mapping_contactos[contacto.IdEntidad]) {
            mapping_contactos[contacto.IdEntidad].push(newContacto);
        } else {
            mapping_contactos[contacto.IdEntidad] = [newContacto];
        }
    });

    const mapping_vehiculos = {};
    vehiculos.forEach((vehiculo) => {
        const newVehiculo = {
            plates: vehiculo.Placas,
            economic_number: vehiculo.NumEco,
            brand: vehiculo.Marca,
            model: vehiculo.Modelo,
            year: vehiculo["Año"],
            color: vehiculo.Color,
            vin: vehiculo.VIN,
        }
        if (mapping_vehiculos[vehiculo.IdEntidad]) {
            mapping_vehiculos[vehiculo.IdEntidad].push(newVehiculo);
        } else {
            mapping_vehiculos[vehiculo.IdEntidad] = [newVehiculo];
        }
    });

    const mapping_sells_clients = {};
    clientes_sells.forEach((c) => {
        mapping_sells_clients[c.Nombre] = Number(c.Ventas.replace(/,/g,''));
    });

    const mapping_sells_providers = {};
    proveedores_sells.forEach((c) => {
        mapping_sells_providers[c.Nombre] = Number(c.Compras.replace(/,/g,''));
    });

    entidades.forEach(async (entidad) => {
        if (entidad.Tipo === "1") { // Clientes
            const newCliente = new clientModel();
            newCliente.legacy_id = entidad.IdEntidad;
            newCliente.account_id = ACCOUNT_ID;
            newCliente.name = entidad.Nombre;
            newCliente.rfc = entidad.RFC;
            newCliente.credit_days = Number(entidad.Credito) !== '' ? Number(entidad.Credito) : 0;
            newCliente.sells = mapping_sells_clients[entidad.Nombre] !== undefined ? mapping_sells_clients[entidad.Nombre] : 0;
            let newPrice = 'PUBLICO';
            if (entidad.Precio === 'ESPECIAL') newPrice = 'TALLER';
            if (entidad.Precio === 'MAYOREO') newPrice = 'MAYOREO';
            if (entidad.Precio === 'ADQUISISION') newPrice = 'MAYOREO';
            newCliente.price_type = newPrice;
            newCliente.address = entidad.Direccion;
            newCliente.address_city = entidad.Colonia;
            newCliente.address_country = entidad.Poblacion;
            newCliente.address_state = entidad.Estado;
            newCliente.address_cp = String(entidad.CP);
            newCliente.phone_number = String(entidad.Telefono1);
            newCliente.phone_mobil = String(entidad.Telefono2);
            newCliente.phone_office = String(entidad.Telefono3);
            newCliente.email = entidad['E-mail'];
            newCliente.curp = entidad.CURP;
            if (mapping_contactos[entidad.IdEntidad]) {
                newCliente.contacts = mapping_contactos[entidad.IdEntidad];
            }
            if (mapping_vehiculos[entidad.IdEntidad]) {
                newCliente.cars = mapping_vehiculos[entidad.IdEntidad];
            }
            await newCliente.save().then((savedObj) => {
                console.log("saved client...");
            }).catch((err) => {
                console.log(err);
                throw err;
            });
        } else if (entidad.Tipo === "2") { // proveedores
            const newProvider = new providerModel();
            newProvider.legacy_id = entidad.IdEntidad;
            newProvider.account_id = ACCOUNT_ID;
            newProvider.name = entidad.Nombre;
            newProvider.rfc = entidad.RFC;
            newProvider.credit_days = Number(entidad.Credito) !== '' ? Number(entidad.Credito) : 0;
            newProvider.buys = mapping_sells_providers[entidad.Nombre] !== undefined ? mapping_sells_providers[entidad.Nombre] : 0;
            newProvider.address = entidad.Direccion;
            newProvider.address_city = entidad.Colonia;
            newProvider.address_country = entidad.Poblacion;
            newProvider.address_state = entidad.Estado;
            newProvider.address_cp = String(entidad.CP);
            newProvider.phone_number = String(entidad.Telefono1);
            newProvider.phone_mobil = String(entidad.Telefono2);
            newProvider.phone_office = String(entidad.Telefono3);
            newProvider.email = entidad['E-mail'];
            if (mapping_contactos[entidad.IdEntidad]) {
                newProvider.contacts = mapping_contactos[entidad.IdEntidad];
            }
            await newProvider.save().then((saved) => {
                console.log("saved proveedor...");
            }).catch((err) => {
                console.log(err);
                throw err;
            });
        }
    });
}

doMigration().catch((err) => {
    console.log(err);
});