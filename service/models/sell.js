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
    user: {
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        name: { type: String }
    },
    folio: {
        type: Number
    },
    status: {
        type: String,
        default: 'quotation'
    },
    date_in: {
        type: Date,
        default: Date.now
    },
    date_out: {
        type: Date
    },
    car: {
        kilometers: { type: Number },
        plates: { type: String },
        economic_number: { type: String },
        brand: { type: String },
        model: { type: String },
        year: { type: Number },
        color: { type: String },
        vin: { type: String }
    },
    notes: { 
        type: String
    },
    products: [{
        product_id: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        description: { type: String },
        quantity: { type: Number },
        price: { type: Number }
    }],
    packages: {
        package_id: {
            type: Schema.ObjectId,
            ref: 'Product_Package'
        },
        products: [{
            product_id: {
                type: Schema.ObjectId,
                ref: 'Product'
            },
            quantity: { type: Number },
            price: { type: Number }
        }],
        name: {
            type: String
        },
        description: {
            type: String
        },
    },
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
