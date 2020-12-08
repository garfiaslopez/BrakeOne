//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-plugin-autoinc');

var SpendSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
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
    description: {
        type: String
    },
    notes: {
        type: String
    },
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
    created: {
        type: Date,
        default: Date.now
    }
});

SpendSchema.plugin(mongoosePaginate);

SpendSchema.plugin(autoIncrement.plugin, {
    model: 'Spend',
    field: 'folio',
    startAt: 1
});

SpendSchema.index({
	description: 'text'
});

//Return the module
module.exports = mongoose.model("Spend", SpendSchema);