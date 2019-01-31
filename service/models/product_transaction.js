//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ProductTransactionSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    product_id: {
        type: Schema.ObjectId,
        ref: 'Product'
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'User'
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
    type: {
        type: String // COMPRA OR VENTA
    },
    date: {
        type: Date,
        default: Date.now
    },
    created: {
        type: Date,
        default: Date.now
    }
});

ProductTransactionSchema.plugin(mongoosePaginate);

//Return the module
module.exports = mongoose.model("Product_Transaction", ProductTransactionSchema);
