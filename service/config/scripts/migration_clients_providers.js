var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');
mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var MongoClient = require('mongodb').MongoClient;

var DestinyConnect = mongoose.connect("mongodb://localhost:27017/BrakeOne", { useNewUrlParser: true });


// VARS:

const ACCOUNT_ID = "5b79c3755526c91360058100";
const SUBSIDIARY_ID = "5b79c3755526c91360058101";

// from personal db
var userModel = require('./models/user');

// from entidades db
var providerModel = require('./models/provider');
var clientModel = require('./models/client');

// from productos db
var productModel = require('./models/product');


const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true });

client.connect(function(err, client) {
    const db = client.db("BrakeOneBackup");

    var entidades = db.collection('Entidades');
    var detalle_entidades = db.collection('DetalleEntidades');
    var detalle_vehiculos = db.collection('DetalleVehiculos');

    detalle_entidades.find().toArray((err, contactos) => {
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
        detalle_vehiculos.find().toArray((err, vehiculos) => {
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
            entidades.find().toArray((err, entidades_result) => {
                entidades_result.forEach((entidad) => {
                    if (entidad.Tipo === 1) { // Clientes
                        const newCliente = new clientModel();
                        newCliente.legacy_id = entidad.IdEntidad;
                        newCliente.account_id = ACCOUNT_ID;
                        newCliente.name = entidad.Nombre;
                        newCliente.rfc = entidad.RFC;
                        newCliente.credit_days = entidad.Credito !== '' ? entidad.Credito : 0;
                        newCliente.sells = 0;
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
                        newCliente.save((err, savedObj) => {
                            if (err) console.log(err);
                            console.log("saved client...");
                        });
                    } else if (entidad.Tipo === 2) { // proveedores
                        const newProvider = new providerModel();
                        newProvider.legacy_id = entidad.IdEntidad;
                        newProvider.account_id = ACCOUNT_ID;
                        newProvider.name = entidad.Nombre;
                        newProvider.rfc = entidad.RFC;
                        newProvider.credit_days = entidad.Credito !== '' ? entidad.Credito : 0;
                        newProvider.buys = 0;
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
                        newProvider.save((err, savedObj) => {
                            if (err) console.log(err);
                            console.log("saved proveedor...");
                        });
                    }
                });
            });
    
    
        });
    });
    
});


