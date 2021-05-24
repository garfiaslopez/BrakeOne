'use strict';

var AuthenticateFunctions = require("../controllers/authController");
var MiddleAuth = require('./../middlewares/auth');

var CRUDController = require("../controllers/CRUDController");
var CustomFunctions = require("../controllers/customFunctions");

var Models = [
    {
        model_name: 'account',
        singular: 'account',
        plural: 'plural',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'warrantyProduct',
        singular: 'warrantyProduct',
        plural: 'warrantyProducts',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'client',
        singular: 'client',
        plural: 'clients',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'paysheet',
        singular: 'paysheet',
        plural: 'paysheets',
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
        model_name: 'service',
        singular: 'service',
        plural: 'services',
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
    },
    {
        model_name: 'cashdrawer',
        singular: 'cashdrawer',
        plural: 'cashdrawers',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'notification',
        singular: 'notification',
        plural: 'notifications',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'payment',
        singular: 'payment',
        plural: 'payments',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'quotation',
        singular: 'quotation',
        plural: 'quotations',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'missing',
        singular: 'missing',
        plural: 'missings',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'spend',
        singular: 'spend',
        plural: 'spends',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'reception',
        singular: 'reception',
        plural: 'receptions',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'reception_payment',
        singular: 'reception-payment',
        plural: 'reception-payments',
        methods: ['create', 'read', 'update', 'delete', 'search']
    },
    {
        model_name: 'car',
        singular: 'car',
        plural: 'cars',
        methods: ['search']
    }
]

module.exports = function(server) {
    //  Redirect request to controller
    server.post('/authenticate',AuthenticateFunctions.AuthByUser);
    //the routes put before the middleware does not is watched.
    server.use(MiddleAuth.isAuthenticated);
    // ALL CRUD MODELS MAKE A CRUD ROUTES:
    Models.forEach((model) => {
        server.post('/' + model.singular, CRUDController('create', model.model_name));
        server.get('/' + model.singular + '/:object_id', CRUDController('read', model.model_name));
        server.put('/' + model.singular + '/:object_id', CRUDController('update', model.model_name));
        server.del('/' + model.singular + '/:object_id', CRUDController('delete', model.model_name));
        server.post('/' + model.plural, CRUDController('search', model.model_name));
    });

    server.post('/helpers/updatestockPublico', CustomFunctions.update_stockPublico);
    server.post('/helpers/updatestockTaller', CustomFunctions.update_stockTaller);
    server.post('/helpers/updatestockCredito', CustomFunctions.update_stockCredito);
    server.post('/helpers/updatestockMayoreo', CustomFunctions.update_stockMayoreo);
    server.post('/helpers/updatestockCosto', CustomFunctions.update_stockCosto);
    server.post('/helpers/updatestockCPTCM', CustomFunctions.update_stockCPTCM);
    server.post('/helpers/car_makes', CustomFunctions.car_makes);
    server.post('/helpers/car_models', CustomFunctions.car_models);
    server.post('/helpers/car_trims', CustomFunctions.car_trims);
    server.post('/helpers/replicate_product', CustomFunctions.replicate_product);
    server.post('/helpers/delete_product', CustomFunctions.delete_product);
    server.post('/helpers/search_product', CustomFunctions.search_product);

};