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
	user_id: [{
		type: Schema.ObjectId,
		ref: 'User'
	}],
	sell_id: {
		type: Schema.ObjectId,
		ref: 'Sell'
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
	status: {
		type: String,
		default: 'normal'
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
