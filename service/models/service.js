//PACKAGES:
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ServiceSchema = new Schema({
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    description: {
        type: String
    },
    price_public: {
        type: Number
    },
    price_workshop: {
        type: Number
    },
    price_wholesale: {
        type: Number
    },
	created: {
		type: Date,
		default: Date.now
	}
});

ServiceSchema.plugin(mongoosePaginate);


ServiceSchema.index({
	description: 'text'
});

//Return the module
module.exports = mongoose.model("Service", ServiceSchema);
