var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');
var fs = require('fs'); 
var parse = require('csv-parse');
var path = require('path');

mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//var DestinyConnect = mongoose.connect("mongodb://BrakeOneService:bmnqdQUObC4AS11i@127.0.0.1:18509/BrakeOne", { useNewUrlParser: true });
var DestinyConnect = mongoose.connect("mongodb://localhost:27017/BrakeOne", { useNewUrlParser: true });

// from productos db
var productModel = require('../../models/product');

async function getP () {
    const products = await productModel.find({ subsidiary_id: '5b79c3755526c91360058101' });
    console.log("TOTAL PRODUCTS:  " + products.length);
    var stock_maps=[];
    var total_rows = 0;
    fs.createReadStream( __dirname + '/productscsv.csv' ).pipe(parse({delimiter: ','})).on('data', (csvrow) => {
        total_rows++;
        stock_maps[csvrow[0]] = Number(csvrow[9]);
    }).on('end',function() {
        //do something wiht csvData
        console.log("total rows " + total_rows)
        console.log("collected " + Object.keys(stock_maps).length);

        var matched = 0;
        products.forEach((p) => {
            if (stock_maps[p.key_id]) {
                matched++;
            }
        });
        console.log("matched: " + matched);
    });

}

getP();



