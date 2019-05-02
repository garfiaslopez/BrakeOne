const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/build', {
    setHeaders: (res, path) =>  {
        res.set("Cache-Control", "no-store, no-cache");
        res.set("Access-Control-Allow-Origin", "*");
        res.set("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");
        res.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.type("application/json");
    }
}));

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/cert.pem'),
};

var server_https = https.createServer(options, app);
server_https.listen(443, (err) => {
    if (err) console.log(err);
    console.log("Express https server listening on port 443");
});

app.listen(80, () => {
    console.log("Express https server listening on port 80");
});