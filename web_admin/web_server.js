const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/build'));

app.listen(7000, () => {
    console.log('Running app on port 7000!');
});