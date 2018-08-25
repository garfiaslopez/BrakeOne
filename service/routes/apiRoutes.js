 'use strict';

var AuthenticateFunctions = require("../controllers/authController");
var MiddleAuth = require('./../middlewares/auth');

var CRUDController = require("../controllers/CRUDController");
var Models = [
    {
        model_name: 'account',
        singular: 'account',
        plural: 'plural',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'client',
        singular: 'client',
        plural: 'clients',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'product_package',
        singular: 'product-package',
        plural: 'product-packages',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'product_transaction',
        singular: 'product-transaction',
        plural: 'product-transactions',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'product',
        singular: 'product',
        plural: 'products',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'provider',
        singular: 'provider',
        plural: 'providers',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'sell',
        singular: 'sell',
        plural: 'sells',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'subsidiary',
        singular: 'subsidiary',
        plural: 'subsidiarys',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'user',
        singular: 'user',
        plural: 'users',
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
