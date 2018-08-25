//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var AccountSchema = new Schema({
	denomination: {
        type: String
    },
	owner_id: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    fiscal_data: {
        name: { type: String },
        phone: { type: String },
        address: { type: String },
        rfc: { type: String }
    },
    status: {
		type: String,
		default: 'normal'
    },
	created: {
		type: Date,
		default: Date.now
	}
});

AccountSchema.plugin(mongoosePaginate);

//Return the module
module.exports = mongoose.model("Account",AccountSchema);
