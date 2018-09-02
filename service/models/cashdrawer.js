//PACKAGES:
var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var CashdrawerSchema = new Schema({
	account_id: {
		type: Schema.ObjectId,
		ref: 'Account',
		required: true
	},
	subsidiary_id: [{
		type: Schema.ObjectId,
		ref: 'Subsidiary'
	}],
	folio: {
		type: String,
		trim: true,
		required: true,
        unique: true
    },
	status: {
		type: String,
		default: 'EMITIDO'
    },
    date: {
        type: Date,
		default: Date.now
    },
    moves: [{
        beneficiary: {
            type: String,
            required: true
        },
        denomination: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        withdrawals: {
            type: Number,
            required: true
        },
        deposits: {
            type: Number,
            required: true
        },
        balance: {
            type: Number,
            required: true
        }
    }],
    created: {
        type: Date,
		default: Date.now
    }
});

CashdrawerSchema.plugin(mongoosePaginate);

CashdrawerSchema.index({
	folio: 'text'
});

module.exports = mongoose.model("Cashdrawer",CashdrawerSchema);
