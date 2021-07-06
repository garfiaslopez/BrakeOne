'use strict';

//  Module dependencies.
var restify = require('restify');
var mongoose = require('mongoose');
var Logger = require('bunyan');
var winston = require('winston');
var moment = require('moment');
var bluebird = require('bluebird');
var fs = require('fs');

mongoose.Promise = bluebird;

//  Define node env
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//  Initializing system variables
var config = require('./config/config');

// Bootstrap MongoDB connection
var dbMongo = mongoose.connect(config.dbMongo, {
    useNewUrlParser: true
});

// Create a Winston logger
// Only terminal
// For all our logic
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(
            {
                colorize: true,
                timestamp: function(){
                    var date = moment( new Date() ).format('YYYY-MM-DD HH:mm:ss');
                    return date;
                }
            }
        )
    ]
});

// Create a Bunyan logger with useful serializers (functions that tell
// the logger how to serialize a value for that log record key to JSON).
// This is uses by restify
var log = new Logger({
    name: config.app.name,
    streams: [
        {
            stream: process.stdout,
            level: 'debug'
        }
    ],
    serializers: {
        req: Logger.stdSerializers.req,
        res: restify.bunyan.serializers.res,
    },
});

var server = null;
if (process.env.NODE_ENV !== 'production') {
    server = restify.createServer({
        log: log,
        name: config.app.name
    });
} else {
    server = restify.createServer({
        log: log,
        name: config.app.name,
        key: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/privkey.pem'),
        certificate: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/cert.pem'),
    });
}


//  Restify base settings
require('./config/system/restify')( server, logger );

//  Restify routes settings
require('./config/system/routes')( server );

//  Restify models settings
require('./config/system/models')( server );

var port = process.env.PORT || config.port;

server.listen( port, function() {
    /* console.log('Puerto al que correo la aplicación: ', port); */
    logger.info( 'Inicializando API url: ' + server.url + ' name: ' + server.name + ' pid: ' + process.pid + ' env: ' + process.env.NODE_ENV );
});