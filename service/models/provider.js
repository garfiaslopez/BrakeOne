//PACKAGES:
var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ProviderSchema = new Schema({
    account_id: {
        type: Schema.ObjectId,
        ref: 'Account',
        required: true
    },
    name: {
        type: String,
        unique: true
    },
    rfc: {
        type: String
    },
    credit_days: {
        type: Number
    },
    buys: {
        type: Number
    },
    address: {
        type: String
    },
    address_city: {
        type: String
    },
    address_country: {
        type: String
    },
    address_state: {
        type: String
    },
    address_cp: {
        type: String
    },
    phone_number: {
        type: String
    },
    phone_mobil: {
        type: String
    },
    phone_office: {
        type: String
    },
    email: {
        type: String
    },
    contacts: [{
        name: { type: String },
        job_role: { type: String },
        phone_number: { type: String },
        email: { type: String }
    }],
    legacy_id: {
		type: String
	},
    created: {
        type: Date,
        default: Date.now
    }
});

ProviderSchema.plugin(mongoosePaginate);

ProviderSchema.index({
	name: 'text', 
    rfc: 'text',
    email: 'text'
});

module.exports = mongoose.model("Provider", ProviderSchema);
