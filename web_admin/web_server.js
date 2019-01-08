const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/build'));

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/cert.pem'),
};

var server_https = https.createServer(options, app);
var server_http = http.createServer({}, app);

server_https.listen(443, (err) => {
    if (err) console.log(err);
    console.log("Express https server listening on port 443");
});

server_http.listen(80, (err) => {
    if (err) console.log(err);
    console.log("Express http server listening on port 80");
});