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
const PROVIDERS_ID = {
    'COMERCIALIZADORA DE AUTOPARTES FRECENTAURO S.A. DE C.V.': '5c463b443bde7e11005b9225',
    'CORPORATIVO AUTO REFACCIONES DE CALIDAD, S.A. DE C.V.': '5c463b453bde7e11005b9fff',
    'BREMBO MEXICO, S.A. DE C.V.': '5c463b453bde7e11005ba1a3',
    'FREMAX JOFUND DE M�XICO, S.A. DE C.V.': '5b79c3755526c91360058100',
    'EUROFRENOS, S.A. DE C.V.': '5b79c3755526c91360058100',
}

// from productos db
var productModel = require('../../models/product');

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

async function migrate_products(productos) {
    let savedProducts = 0;
    let updatedProducts = 0;
    productos.forEach(async (producto) => {
        if (producto.MARCA !== "") {
            const p = await productModel.findOne({ key_id: producto.CLAVE, subsidiary_id: SUBSIDIARY_ID });
            if (p) {
                p.price = isNaN(Number(producto.COSTO)) ? 0 : Number(producto.COSTO);
                p.price_public = isNaN(Number(producto.PUBLICO)) ? 0 : Number(producto.PUBLICO);
                p.price_workshop = isNaN(Number(producto.TALLER)) ? 0 : Number(producto.TALLER);
                p.price_wholesale = isNaN(Number(producto.MAYOREO)) ? 0 : Number(producto.MAYOREO);
                // await p.save().catch((err) => {
                //     console.log(err);
                // });
                updatedProducts++;
                console.log("Updated product");
            } else {
                const newProducto = new productModel();

                if (producto.NUMEROOE) {
                    newProducto.numero_oe = producto.NUMEROOE;
                }
                newProducto.subsidiary_id = SUBSIDIARY_ID;
                newProducto.provider_id = PROVIDERS_ID[producto.PROVEEDOR.trim()];
                newProducto.description = producto.DESCRIPCION.trim();
                newProducto.key_id = producto.CLAVE;
                newProducto.fmsi = producto.FMSI;
                newProducto.line = producto.LINEA;
                newProducto.brand = producto.MARCA;
                newProducto.stock = 0;
                newProducto.stock_ideal = 3;
                newProducto.localization = "";
                newProducto.price = isNaN(Number(producto.COSTO)) ? 0 : Number(producto.COSTO);
                newProducto.price_public = isNaN(Number(producto.PUBLICO)) ? 0 : Number(producto.PUBLICO);
                newProducto.price_workshop = isNaN(Number(producto.TALLER)) ? 0 : Number(producto.TALLER);
                newProducto.price_wholesale = isNaN(Number(producto.MAYOREO)) ? 0 : Number(producto.MAYOREO);

                // await newProducto.save().catch((err) => {
                //     console.log(err);
                // });
                savedProducts++;
                console.log("saved product");
            }
        }
    });
    console.log("Saved:" + savedProducts + " - Updated:" + updatedProducts);
}

async function doMigration() {
    const files = [
        'BremboCeramica_oe',
        'BremboDiscos_oe',
        'BremboLowMetal_oe',
    ];
    let total = 0;
    await files.forEach(async (f) => {
        const path = '/brakeone_tables/brembo_new_tables/' + f + '.csv';
        let header  = ['CLAVE','FMSI','LINEA','MARCA','DESCRIPCION','COSTO','PUBLICO','TALLER','MAYOREO','PROVEEDOR'];
        if (f === 'BremboCeramica_oe' || f === 'BremboDiscos_oe' || f === 'BremboLowMetal_oe' ) {
            header = ['CLAVE','FMSI','NUMEROOE','LINEA','MARCA','DESCRIPCION','COSTO','PUBLICO','TALLER','MAYOREO','PROVEEDOR'];
        }
        const p = await getFromCSV(path,header);
        console.log("TOTAL PRODUCTS:" + p.length);
        total += p.length;
        await migrate_products(p);
        console.log("DONE MIGRATION, SUM: " + total);
    });
}

doMigration().catch((err) => {console.log(err)});

