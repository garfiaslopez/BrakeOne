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
		default: 'NORMAL'
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
