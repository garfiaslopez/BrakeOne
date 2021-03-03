    //PACKAGES:
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;
    var mongoosePaginate = require('mongoose-paginate');
    var autoIncrement = require('mongoose-plugin-autoinc');

    var SellSchema = new Schema({
        subsidiary_id: {
            type: Schema.ObjectId,
            ref: 'Subsidiary'
        },
        user_id: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        client_id: {
            type: Schema.ObjectId,
            ref: 'Client'
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
        car_brand: {
            type: String,
            ref: 'User'
        },
        car_color: {
            type: String,
            ref: 'Car'
        },
        car_kms: {
            type: String,
            ref: 'Car'
        },
        car_model: {
            type: String,
            ref: 'Car'
        },
        car_plates: {
            type: String,
            ref: 'Car'
        },
        car_vin: {
            type: String,
            ref: 'Car'
        },
        car_year: {
            type: String,
            ref: 'Car'
        },

        quotation_id: {
            type: Schema.ObjectId,
            ref: 'Quotation'
        },
        car_id: {
            type: String
        },
        legacy_id: {
            type: String
        },
        kilometers: {
            type: String
        },
        folio: {
            type: Number
        },
        legacy_folio: {
            type: String
        },
        folio_fact: {
            type: String
        },
        status: {
            type: String,
            default: 'NORMAL' // pagada, cancelada, deuda, activa
        },
        date: {
            type: Date,
            default: Date.now
        },
        date_in: {
            type: Date
        },
        date_out: {
            type: Date
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
            old_stock: { type: Number },
            user_name: { type: String },
            description: { type: String },
            key_id: { type: String },
            fmsi: { type: String },
            brand: { type: String },
            line: { type: String },
            price_type: { type: String },
            price: { type: Number },
            quantity: { type: Number },
            discount: { type: Number },
            total: { type: Number }
        }],
        services: [{
            id: {
                type: Schema.ObjectId,
                ref: 'Service'
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
        payed: {
            type: Number,
            default: 0
        },
        is_payed: { 
            type: Boolean,
            default: false
        },
        is_claim: {
            type: Boolean,
            default: false
        },
        is_canceled: {
            type: Boolean,
            default: false
        },
        is_remission: {
            type: Boolean,
            default: true
        },
        is_service: {
            type: Boolean
        },
        is_finished: {
            type: Boolean,
            default: false
        },
        created: {
            type: Date,
            default: Date.now
        }
    });

    SellSchema.plugin(mongoosePaginate);

    SellSchema.plugin(autoIncrement.plugin, {
        model: 'Sell',
        field: 'folio',
        startAt: 1
    });

    SellSchema.index({
        folio: 'text'
    });

    //Return the module
    module.exports = mongoose.model("Sell", SellSchema);