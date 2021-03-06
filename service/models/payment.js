//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-plugin-autoinc');

var PaymentSchema = new Schema({
	subsidiary_id: {
		type: Schema.ObjectId,
		ref: 'Subsidiary'
	},
	client_id: {
		type: Schema.ObjectId,
		ref: 'Client'
	},
	user_id: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	sell_id: {
		type: Schema.ObjectId,
		ref: 'Sell'
	},
	serviceCar_id: {
		type: Schema.ObjectId,
		ref: 'serviceCar'
	},
	legacy_id: {
        type: String
	},
	legacy_folio: {
        type: String
    },
	folio: {
        type: Number
	},
	type: {
		type: String // EFECTIVO, DEPOSITO, TRANSFERENCIA
	},
	bank: {
		type: String,
	},
	reference: {
		type: String,
	},
	notes: {
		type: String
	},
	total: {
		type: Number
	},
	is_canceled: {
        type: Boolean,
        default: false
    },
	status: {
		type: String,
		default: 'NORMAL' // normal, cancelado
	},
	date: {
		type: Date,
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	}
});

PaymentSchema.plugin(mongoosePaginate);

PaymentSchema.plugin(autoIncrement.plugin, {
    model: 'Payment',
    field: 'folio',
    startAt: 1
});



//Return the module
module.exports = mongoose.model("Payment",PaymentSchema);