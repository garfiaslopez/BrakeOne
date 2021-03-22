    //PACKAGES:
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;
    var mongoosePaginate = require('mongoose-paginate');
    var autoIncrement = require('mongoose-plugin-autoinc');

    var WarrantySchema = new Schema({
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
            default: 'GARANTIA' // pagada, cancelada, deuda, activa
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
            total: { type: Number }
        }],
        total: {
            type: Number
        },
        is_remission: {
            type: Boolean,
            default: true
        },
        created: {
            type: Date,
            default: Date.now
        }
    });

    WarrantySchema.plugin(mongoosePaginate);

    WarrantySchema.plugin(autoIncrement.plugin, {
        model: 'Warranty',
        field: 'folio',
        startAt: 1
    });

    WarrantySchema.index({
        folio: 'text'
    });

    //Return the module
    module.exports = mongoose.model("Warranty", WarrantySchema);