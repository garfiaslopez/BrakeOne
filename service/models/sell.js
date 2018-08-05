//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var SellSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    user: {
        user_id: {
            type: Schema.ObjectId,
            ref: 'Subsidiary'
        },
        name: { type: String }
    },
    folio: {
        type: String
    },
    status: {
        type: String,
        default: 'presale'
    },
    date_in: {
        type: Date,
        default: Date.now
    },
    date_out: {
        type: Date
    },
    car: {
        kilometers: { type: Number },
        plates: { type: String },
        economic_number: { type: String },
        brand: { type: String },
        model: { type: String },
        year: { type: Number },
        color: { type: String },
        vin: { type: String }
    },
    notes: { 
        type: String
    },
    products: [{
        description: { type: String },
        quantity: { type: Number },
        price: { type: Number }
    }],
    total: {
        type: Number
    },
    is_estimation: { 
        type: Boolean
    },
    is_remission: { 
        type: Boolean
    },
    created: {
        type: Date,
        default: Date.now
    }
});

SellSchema.plugin(mongoosePaginate);

//Return the module
module.exports = mongoose.model("Sell", SellSchema);
