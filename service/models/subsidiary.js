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
		type: String
	},
	phone: {
		type: String
	},
	address: {
		type: String
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

//Return the module
module.exports = mongoose.model("Subsidiary",SubsidiarySchema);
