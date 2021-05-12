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
    provider_id: {
        type: Schema.ObjectId,
        ref: 'Provider'
    },
    provider_name: {
        type:String
    },
    folio: {
        type: Number
    },
	brand: {
		type: String
	},
    line: {
        type: String
    },
	is_invoice: {
		type: Boolean,
		default: false
	},
    is_canceled: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: 'NORMAL' // NORMAL // PAGADA // CANCELADA
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
        user_name: { type: String },
        description: { type: String },
        key_id: { type: String },
        fmsi: { type: String },
        brand: { type: String },
        line: { type: String },
        price_type: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        discount: { type: Number },
        total: { type: Number },
        old_stock: {type: Number},
    }],
    payed: {
        type: Number,
        default: 0
    },
    total: {
        type: Number
    },
    is_payed: { 
        type: Boolean,
        default: false
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
    folio: 'text'
});

//Return the module
module.exports = mongoose.model("Missing", MissingSchema);