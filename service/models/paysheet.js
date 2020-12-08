//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var PaysheetPackage = new Schema({
    account_id: {
        type: Schema.ObjectId,
        ref: 'Account'
    },
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

PaysheetPackage.plugin(mongoosePaginate);

PaysheetPackage.index({
	name: 'text', 
    description: 'text'
});

//Return the module
module.exports = mongoose.model("Paysheet", PaysheetPackage);