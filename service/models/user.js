//PACKAGES:
var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	account_id: {
		type: Schema.ObjectId,
		ref: 'Account',
		required: true
	},
	subsidiary_id: [{
		type: Schema.ObjectId,
		ref: 'Subsidiary'
	}],
	username: {
		type: String,
		trim: true,
		required: true,
        unique: true
	},
	password: {
		type: String,
		required: true
	},
	bypass_localization: {
		type: Boolean,
		default: true
	},
	rol: {
		type: String,
		default: "MOSTRADOR", // user | manager | admin
		required: true,
	},
	clave: {
		type: String
	},
	name: {
		type: String
	},
	nickname: {
		type: String
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
	email: {
		type: String
	},
	date_birth: {
		type: Date
	},
	date_start_working: {
		type: Date
	},
	branch: {
		type: String
	},
	job_role: {
		type: String
	},
	diary_salary: {
		type: Number
	},
	comission: {
		type: Number
	},
	rfc: {
		type: String
	},
	curp: {
		type: String
	},
	imss: {
		type: String
	},
	status: {
		type: String,
		default: 'ACTIVO'
	},
	legacy_id: {
		type: String
	},
    created: {
        type: Date,
		default: Date.now
    }
});

UserSchema.plugin(mongoosePaginate);

UserSchema.index({
	name: 'text',
	nickname: 'text',
	username: 'text',
	rfc: 'text',
	curp: 'text',
	imss: 'text',
	email: 'text'
});

module.exports = mongoose.model("User",UserSchema);
