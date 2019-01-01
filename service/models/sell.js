//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-auto-increment');

var SellSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    payments: {
        type: Schema.ObjectId,
        ref: 'Payments'
    },
    client_id: {
        type: Schema.ObjectId,
        ref: 'Client'
    },
    car_id: {
        type: String
    },
    folio: {
        type: Number
    },
    status: {
        type: String,
        default: 'quotation' // remission, pending, 
    },
    date_in: {
        type: Date,
        default: Date.now
    },
    date_out: {
        type: Date
    },
    notes: {
        type: String
    },
    products: [{
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        product_id: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        quantity: { type: Number },
        discount: { type: Number },
    }],
    services: [{
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        description: { type: String },
        price: { type: Number },
    }],
    total: {
        type: Number
    },
    is_estimation: { 
        type: Boolean
    },
    is_remission: { 
        type: Boolean
    },
    is_service: { 
        type: Boolean
    },
    created: {
        type: Date,
        default: Date.now
    }
});

SellSchema.plugin(mongoosePaginate);

SellSchema.plugin(autoIncrement.plugin, {
    model: 'Sell',
    field: 'folio',
    startAt: 1
});

//Return the module
module.exports = mongoose.model("Sell", SellSchema);
