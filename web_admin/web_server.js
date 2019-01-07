const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/build'));

app.listen(80, () => {
    console.log('Running app on port 80!');
});