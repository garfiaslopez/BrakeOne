//PACKAGES:
var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
    year: {
        type: Number
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    trim: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

CarSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Car", CarSchema);
