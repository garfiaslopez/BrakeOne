//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ProductTransactionSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    old_stock: { 
        type: Number 
    },
    product_id: {
        type: Schema.ObjectId,
        ref: 'Product'
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    client_id: {
        type: Schema.ObjectId,
        ref: 'Client'
    },
    provider_id: {
        type: Schema.ObjectId,
        ref: 'Provider'
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    discount: {
        type: Number
    },
    total: {
        type: Number
    },
    type: {
        type: String // COMPRA OR VENTA
    },
    date: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    },
    prueba: {
        type: String
    }
});

ProductTransactionSchema.plugin(mongoosePaginate);

//Return the module
module.exports = mongoose.model("Product_Transaction", ProductTransactionSchema);