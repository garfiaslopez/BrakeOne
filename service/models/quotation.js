//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-plugin-autoinc');

var QuotationSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
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
    created: {
        type: Date,
        default: Date.now
    }
});

QuotationSchema.plugin(mongoosePaginate);

QuotationSchema.plugin(autoIncrement.plugin, {
    model: 'Quotation',
    field: 'folio',
    startAt: 1
});

QuotationSchema.index({
    client_name: 'text',
    folio: 'text',

});

//Return the module
module.exports = mongoose.model("Quotation", QuotationSchema);
