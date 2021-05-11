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
    brand: {
        type: String,
        required: true
    },
    line: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
 
    folio: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
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