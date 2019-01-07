//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-plugin-autoinc');

var SellSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    client_id: {
        type: Schema.ObjectId,
        ref: 'Client'
    },
    car_id: {
        type: String
    },
    kilometers: {
        type: String
    },
    folio: {
        type: Number
    },
    status: {
        type: String,
        default: 'remission' // remission, pending, 
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
        id: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        user_name: { type: String },
        description: { type: String },
        price_type: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        discount: { type: Number },
        total: { type: Number }
    }],
    services: [{
        id: {
            type: Schema.ObjectId,
            ref: 'Service'
        },
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        user_name: { type: String },
        description: { type: String },
        price_type: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        discount: { type: Number },
        total: { type: Number }
    }],
    total: {
        type: Number
    },
    is_remission: { 
        type: Boolean,
        default: true
    },
    is_service: { 
        type: Boolean
    },
    is_finished: {
        type: Boolean,
        default: false
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

SellSchema.index({
    folio: 'text',
    client_id: 'text'
});

//Return the module
module.exports = mongoose.model("Sell", SellSchema);
