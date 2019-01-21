var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');
var fs = require('fs'); 
var parse = require('csv-parse');
mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var MongoClient = require('mongodb').MongoClient;

var DestinyConnect = mongoose.connect("mongodb://BrakeOneService:bmnqdQUObC4AS11i@127.0.0.1:18509/BrakeOne", { useNewUrlParser: true });
//var DestinyConnect = mongoose.connect("mongodb://localhost:27017/BrakeOne", { useMongoClient: true });

// VARS:
const SUBSIDIARY_ID = "5b79c3755526c91360058101";

// from productos db
var productModel = require('../../models/product');
var providerModel = require('../../models/provider');

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

async function migrate_products(productos, lineas, mapping_providers, mapping_stock) {
    productos.forEach(async (producto) => {
        const newProducto = new productModel();
        newProducto.legacy_id = producto.IdProducto;
        newProducto.subsidiary_id = SUBSIDIARY_ID;
        if (mapping_providers[producto.IdEntidad]) {
            newProducto.provider_id = mapping_providers[producto.IdEntidad];
        }
        newProducto.description = producto.Descripcion;
        newProducto.key_id = producto.Clave;
        newProducto.fmsi = producto.FMSI;
        newProducto.line = lineas[producto.IdLinea];
        newProducto.brand = producto.Marca;
        newProducto.units = producto.Unidades;
        newProducto.stock = mapping_stock[producto.Clave] !== undefined ? Number(mapping_stock[producto.Clave]) : 0;
        newProducto.stock_ideal = producto.StockIdeal !== '' ? Number(producto.StockIdeal) : 3;
        newProducto.localizatio = producto.Ubicacion;
        newProducto.price = Number(producto.Costo.replace(/,/g,'')) !== NaN ? Number(producto.Costo.replace(/,/g,'')) : 0
        newProducto.price_public = Number(producto.Precio1.replace(/,/g,'')) !== '' ? Number(producto.Precio1.replace(/,/g,'')) : 0
        newProducto.price_workshop = Number(producto.Precio2.replace(/,/g,'')) !== '' ? Number(producto.Precio2.replace(/,/g,'')) : 0
        newProducto.price_wholesale = Number(producto.Precio3.replace(/,/g,'')) !== '' ? Number(producto.Precio3.replace(/,/g,'')) : 0

        const savedObj = await newProducto.save().catch((err) => {
            console.log(err);
        });
        console.log("saved product");
    });
}

async  function doMigration() {
    const stock_products = await getFromCSV(
        '/brakeone_tables/portales_tables/ConProdAzul.csv',
        ['Clave','FMSI','Linea','Marca','Descripcion','Costo','Precio1','Precio2','Precio3','Exist','SumaExist']
    );
    const products = await getFromCSV(
        '/brakeone_tables/portales_tables/Productos.csv',
        ['IdProducto','Clave','FMSI','IdLinea','Marca','Descripcion','IdEntidad','Unidades','StockIdeal','Ubicacion','Costo','Precio1','Precio2','Precio3','Marg1','Marg2','Marg3']
    );
    const lines = await getFromCSV('/brakeone_tables/portales_tables/Lineas.csv',['IdLinea','Nombre']);
    const providers = await providerModel.find().catch((err) => {console.log(err)});

    const mapping_providers = {};
    providers.forEach((prov) => {
        mapping_providers[prov.legacy_id] = prov._id;
    });

    const mapping_lineas = {};
    lines.forEach((linea) => {
        mapping_lineas[linea.IdLinea] = linea.Nombre;
    });

    const mapping_stock = {};
    stock_products.forEach((stock) => {
        mapping_stock[stock.Clave] = stock.Exist;
    });

    await migrate_products(products, mapping_lineas, mapping_providers, mapping_stock);
}

doMigration().catch((err) => {console.log(err)});

