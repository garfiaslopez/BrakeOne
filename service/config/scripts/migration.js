var mongoose = require('mongoose');
var bluebird = require('bluebird');
mongoose.Promise = bluebird;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var MongoClient = require('mongodb').MongoClient;

//  Initializing system variables
var config = require('../config');

var DestinyConnect = mongoose.createConnection(config.dbMongo, {
    useMongoClient: true,
});

var userModel = require('../../models/user');
var productModel = require('../../models/product');
var providerModel = require('../../models/provider');
var clientModel = require('../../models/client');

MongoClient.connect("mongodb://localhost:27017/BrakeOneBackup", (err, db) => {
    if(err) { return console.log(err); }

    var entidades = db.collection('kittens');

    collection.find().toArray(function(err, kittens) {
        // here ...
    });    
});
