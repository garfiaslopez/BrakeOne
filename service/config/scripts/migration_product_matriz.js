var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');
mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var MongoClient = require('mongodb').MongoClient;

var DestinyConnect = mongoose.connect("mongodb://localhost:27017/BrakeOne", { useNewUrlParser: true });

// VARS:
const SUBSIDIARY_ID = "5c3ccee7a7fc2a43e520fccd";

// from productos db
var productModel = require('../../models/product');
var providerModel = require('../../models/provider');

const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true });

function migrate_products(productos, lineas, mapping_providers) {
    productos.forEach((producto) => {

        const newProducto = new productModel();
        newProducto.legacy_id = producto.IdProducto;
        newProducto.subsidiary_id = SUBSIDIARY_ID;
        if (mapping_providers[producto.IdEntidad]) {
            newProducto.provider_id = mapping_providers[producto.IdEntidad];
        }
        newProducto.description = producto.Descripcion;
        newProducto.key_id = producto.Clave;
        newProducto.fmsi = producto.FMSI;
        newProducto.line = lineas[producto.Linea];
        newProducto.brand = producto.Marca;
        newProducto.units = producto.Unidades;
        newProducto.stock = 0;
        newProducto.stock_ideal = producto.StockIdeal !== '' ? Number(producto.StockIdeal) : 3;
        newProducto.localizatio = producto.Ubicacion;
        newProducto.price = producto.Costo !== '' ? producto.Costo : 0
        newProducto.price_public = producto.Precio1 !== '' ? producto.Precio1 : 0
        newProducto.price_workshop = producto.Precio2 !== '' ? producto.Precio2 : 0
        newProducto.price_wholesale = producto.Precio3 !== '' ? producto.Precio3 : 0

        newProducto.save((err, savedObj) => {
            if (err) console.log(err);
            console.log("saved product...");
        });
    });
}


client.connect(function(err, client) {
    const db = client.db("BrakeOneBackup");

    var productos = db.collection('Productos');
    var lineas = db.collection('Lineas');


    providerModel.find({}, (err, providers) => {
        const mapping_providers = {};
        providers.forEach((prov) => {
            mapping_providers[prov.legacy_id] = prov._id;
        });
        lineas.find().toArray((err, lineas_result) => {
            const mapping_lineas = {};
            lineas_result.forEach((linea) => {
                mapping_lineas[linea.IdLinea] = linea.Nombre;
            });
            productos.find().toArray((err, productos_result) => {
                migrate_products(productos_result, mapping_lineas, mapping_providers);
            });
        });
    });


   

});


