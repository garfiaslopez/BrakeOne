const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();
const port = 80;

app.use('/', express.static(__dirname + '/build'));

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/cert.pem'),
};

var server = https.createServer(options, app);

server.listen(port, (err) => {
    if (err) console.log(err);
    console.log("Express server listening on port " + port);
});