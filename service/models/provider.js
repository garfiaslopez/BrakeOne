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
        type: String
    },
    rfc: {
        type: String
    },
    credit_days: {
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
    email: {
        type: String
    },
    contacts: [{
        name: { type: String },
        job_role: { type: String },
        phone_mobil: { type: String },
        email: { type: String }
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

ProviderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Provider", ProviderSchema);
