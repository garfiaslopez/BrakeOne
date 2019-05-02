const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/build', {
    maxAge: '1d',
    setHeaders: (res, path) =>  {
        res.set("Cache-Control", "no-store, no-cache");
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