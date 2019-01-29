//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var autoIncrement = require('mongoose-plugin-autoinc');

var ReceptionSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    provider_id: {
        type: Schema.ObjectId,
        ref: 'Provider'
    },
    folio: {
        type: Number
    },
    folio_fact: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    },
    products: [{
        id: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        user_name: { type: String },
        description: { type: String },
        price_type: { type: String },
        price: { type: Number },
        quantity: { type: Number },
        discount: { type: Number },
        total: { type: Number }
    }],
    total: {
        type: Number
    },
    is_payed: { 
        type: Boolean,
        default: false
    },
    is_remission: { 
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

ReceptionSchema.plugin(mongoosePaginate);

ReceptionSchema.plugin(autoIncrement.plugin, {
    model: 'Reception',
    field: 'folio',
    startAt: 1
});

ReceptionSchema.index({
    folio: 'text'
});

//Return the module
module.exports = mongoose.model("Reception", ReceptionSchema);
