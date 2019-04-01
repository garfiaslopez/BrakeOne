var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');
var _ = require('lodash');
var fs = require('fs'); 
var parse = require('csv-parse');

mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var MongoClient = require('mongodb').MongoClient;

var DestinyConnect = mongoose.connect("mongodb://BrakeOneService:bmnqdQUObC4AS11i@127.0.0.1:18509/BrakeOne", { useNewUrlParser: true });

var carModel = require('../../models/car');

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

    var cars = await getFromCSV(
        '/cars_database.csv',
        ['model_id','model_make_id','model_name','model_trim','model_year']
    );

    cars.forEach( async (car) => {
        const newCar = new carModel();
        newCar.year = Number(car.model_year);
        newCar.make = car.model_make_id.toUpperCase();
        newCar.model = car.model_name.toUpperCase();
        newCar.trim = car.model_trim.toUpperCase();
        await newCar.save().then((savedObj) => {
            console.log("saved car...");
        }).catch((err) => {
            console.log(err);
            throw err;
        });
    });
}

doMigration().catch((err) => {
    console.log(err);
});