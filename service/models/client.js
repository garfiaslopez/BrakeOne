//PACKAGES:
var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
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
    price_type: {
        type: String,
        default: 'public'
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
        phone_mobil: { type: String },
        email: { type: String }
    }],
    cars: [{
        plates: { type: String },
        economic_number: { type: String },
        brand: { type: String },
        model: { type: String },
        year: { type: Number },
        color: { type: String },
        vin: { type: String }
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

ClientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Client", ClientSchema);
