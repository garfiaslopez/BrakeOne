//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-plugin-autoinc');

var MissingSchema = new Schema({
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
    sell_id: {
        type: Schema.ObjectId,
        ref: 'Sell'
    },
    price_type: { type: String },
    client_name: { type: String },
    client_phone: { type: String },
    client_job: { type: String },
    folio: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    },
    car_brand: { type: String },
    car_model: { type: String },
    car_year: { type: String },
    car_vin: { type: String },
    car_plates: { type: String },
    car_color: { type: String },
    car_kms: { type: String },
    car_trim: { type: String },
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
        subsidiary_id: {
            type: Schema.ObjectId,
            ref: 'Subsidiary'
        },
        user_name: { type: String },
        fmsi: { type: String },
        brand: { type: String },
        line: { type: String },
        key_id: { type: String },
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
    created: {
        type: Date,
        default: Date.now
    }
});

MissingSchema.plugin(mongoosePaginate);

MissingSchema.plugin(autoIncrement.plugin, {
    model: 'Missing',
    field: 'folio',
    startAt: 1
});

MissingSchema.index({
    car_brand: 'text',
    car_model: 'text',
    client_name: 'text',
    car_plates: 'text',
});

//Return the module
module.exports = mongoose.model("Missing", MissingSchema);