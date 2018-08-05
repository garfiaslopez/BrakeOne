 'use strict';

var AuthenticateFunctions = require("../controllers/authController");
var MiddleAuth = require('./../middlewares/auth');

var CRUDController = require("../controllers/CRUDController");
var Models = [
    {
        model_name: 'account',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'client',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'product_package',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'product_transaction',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'product',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'provider',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'sell',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'subsidiary',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'user',
        methods: ['create', 'read', 'update', 'delete', 'search']
    }
]

module.exports = function(server) {
    //  Redirect request to controller
    server.post('/authenticate',AuthenticateFunctions.AuthByUser);

    // ALL CRUD MODELS MAKE A CRUD ROUTES:
    Models.forEach((model) => {
        server.post('/' + model.singular, CRUDController('create', model.model_name));
        server.get('/' + model.singular + '/:object_id', CRUDController('read', model.model_name));
        server.put('/' + model.singular + '/:object_id', CRUDController('update', model.model_name));
        server.del('/' + model.singular + '/:object_id', CRUDController('delete', model.model_name));
        server.post('/' + model.plural, CRUDController('search', model.model_name));
    });

    //the routes put before the middleware does not is watched.
    server.use(MiddleAuth.isAuthenticated);
};
