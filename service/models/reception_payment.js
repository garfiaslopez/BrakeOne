//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-plugin-autoinc');

var ReceptionPaymentSchema = new Schema({
	subsidiary_id: {
		type: Schema.ObjectId,
		ref: 'Subsidiary'
	},
	provider_id: {
		type: Schema.ObjectId,
		ref: 'Provider'
	},
	user_id: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	reception_id: {
		type: Schema.ObjectId,
		ref: 'Reception'
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

ReceptionPaymentSchema.plugin(mongoosePaginate);

ReceptionPaymentSchema.plugin(autoIncrement.plugin, {
    model: 'ReceptionPayment',
    field: 'folio',
    startAt: 1
});



//Return the module
module.exports = mongoose.model("Reception_Payment",ReceptionPaymentSchema);
