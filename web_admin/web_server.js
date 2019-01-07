const serve = require('serve');

const server = serve(__dirname + '/build', {
    port: 7000,
    ignore: ['node_modules']
});
