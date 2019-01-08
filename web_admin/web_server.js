var fs = require('fs'),
    http = require('http'),
    https = require('https'),
    express = require('express');

const app = express();
const port = 80;

app.use('/', express.static(__dirname + '/build'));

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/brakeonesystem.com/cert.pem'),
};

var server = https.createServer(options, app).listen(port, () => {
    console.log("Express server listening on port " + port);
});