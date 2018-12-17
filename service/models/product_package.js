//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ProductPackage = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    products: [{
        product_id: {
            type: Schema.ObjectId,
            ref: 'Product'
        },
        quantity: { type: Number },
        price: { type: Number }
    }],
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now
    }
});

ProductPackage.plugin(mongoosePaginate);

ProductPackage.index({
	name: 'text', 
    description: 'text'
});


//Return the module
module.exports = mongoose.model("Product_Package", ProductPackage);
