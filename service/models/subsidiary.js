//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var SubsidiarySchema = new Schema({
	account_id: {
		type: Schema.ObjectId,
		ref: 'Account',
		required: true
	},
	denomination: {
		type: String,
		unique: true,
		required: true,
		uppercase: true,
		trim: true
	},
	phone: {
		type: String,
		required: true,
		trim: true
	},
	address: {
		type: String,
		required: true,
		uppercase: true,
		trim: true
	},
	type: {
		type: String,
		default: "workshop"
	},
    created: {
        type: Date,
		default: Date.now
    },
	status: {
    	type: String,
    	default: "active"
    }
});

SubsidiarySchema.plugin(mongoosePaginate);

SubsidiarySchema.index({
	denomination: 'text', 
	address: 'text'
});

//Return the module
module.exports = mongoose.model("Subsidiary",SubsidiarySchema);
