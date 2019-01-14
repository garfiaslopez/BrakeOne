var mongoose = require('mongoose');
var bluebird = require('bluebird');
var moment = require('moment');
var _ = require('lodash');


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


function migrate_personas(personas) {
    personas.forEach((persona) => {
        const newPerson = new userModel();
        newPerson.legacy_id = persona.IdPersonal;
        newPerson.account_id = ACCOUNT_ID;
        newPerson.username = persona.NomCorto + persona.IdPersonal;
        newPerson.password = "0918273645";
        newPerson.rol = "MOSTRADOR";
        newPerson.name = persona.Nombre;
        newPerson.nickname = persona.NomCorto;

        if (persona.FchaNac != '') {
            const d = persona.FchaNac.split('/');
            newPerson.date_birth = moment({day: d[0], month: d[1], year: d[2]}).toISOString();
        }
        if (persona.FchaIng != '') {
            const d = persona.FchaIng.split('/');
            newPerson.FchaIng = moment({day: d[0], month: d[1], year: d[2]}).toISOString();
        }
        newPerson.save((err, savedObj) => {
            if (err) console.log(err);
            console.log("saved persona...");
        });
    });
}


client.connect(function(err, client) {
    const db = client.db("BrakeOneBackup");
    const db2 = client.db("BrakeOneMatriz");
    var personal = db.collection('Personal');
    var personal2 = db2.collection('Personal');

    const merged_array = [];
    personal.find().toArray((err, personas_result) => {
        personal2.find().toArray((err, personas_result2) => {

            personas_result.forEach((el) => {
                merged_array.push(el);
            });
            personas_result2.forEach((el) => {
                merged_array.push(el);
            });
            const no_duplicates = _.uniqBy(merged_array, 'Nombre');

            migrate_personas(no_duplicates);
        });
    });
});


