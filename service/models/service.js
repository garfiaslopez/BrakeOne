//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ServiceSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    client_name: { 
        type: String,
        ref: 'User'
    },       
    client_phone: {
        type: String,
        ref: 'User'
    },
    client_address_city: {
        type: String,
        ref: 'User'
    },
    client_address_country: {
        type: String,
        ref: 'User'
    },
    client_address_cp: {
        type: String,
        ref: 'User'
    },
    client_address_cp: {
        type: String,
        ref: 'User'
    },
    client_address_state: {
        type: String,
        ref: 'User'
    },
    description: {
        type: String
    },
    price_public: {
        type: Number
    },
    price_workshop: {
        type: Number
    },
    price_wholesale: {
        type: Number
    },
	created: {
		type: Date,
		default: Date.now
	}
});

ServiceSchema.plugin(mongoosePaginate);


ServiceSchema.index({
	description: 'text'
});

//Return the module
module.exports = mongoose.model("Service", ServiceSchema);