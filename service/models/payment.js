//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var PaymentSchema = new Schema({
	account_id: {
        type: Schema.ObjectId,
        ref: 'Account',
        required: true
	},
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
    sell_id: [{
        type: Schema.ObjectId,
        ref: 'Sell'
	}],
	type: {
        type: String  // EFECTIVO, DEPOSITO, TRANSFERENCIA
	},
	bank: {
		type: String,
	},
	reference: {
		type: String,
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

//Return the module
module.exports = mongoose.model("Payment",PaymentSchema);
