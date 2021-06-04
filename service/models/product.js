//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ProductSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    provider_id: {
        type: Schema.ObjectId,
        ref: 'Provider'
    },
    numero_oe: {
        type: String,
    },
    description: {
        type: String
    },
    barcode: {
        type: String
    },
    key_id: {
        type: String
    },
    fmsi: {
        type: String
    },
    line: {
        type: String
    },
    brand: {
        type: String
    },
    units: {
        type: String,
        default: 'PZA'
    },
    stock: {
        type: Number
    },
    stock_ideal: {
        type: Number
    },
    localization: {
        type: String
    },
    price: {
        type: Number
    },
    price_public: {
        type: Number
    },
    price_workshop: {
        type: Number
    },
    price_credit_workshop: {
        type: Number
    },
    price_wholesale: {
        type: Number
    },
    percent_public: {
        type: Number,
        default: 2
    },
    percent_workshop: {
        type: Number
    },
    percent_credit_workshop: {
        type: Number
    },
    percent_wholesale: {
        type: Number
    },
    legacy_id: {
		type: String
	},
	created: {
		type: Date,
		default: Date.now
	}
});

ProductSchema.plugin(mongoosePaginate);

ProductSchema.index({
    key_id: 'text',
    barcode: 'text',
    fmsi: 'text',
    line: 'text',
    brand: 'text',
    localization: 'text',
    numero_oe: 'text',
});

//Return the module
module.exports = mongoose.model("Product", ProductSchema);