//PACKAGES:
var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
    account_id: {
        type: Schema.ObjectId,
        ref: 'Account',
        required: true
    },
    subsidiary_id: {
        type: Schema.ObjectId,
        ref: 'Subsidiary'
    },
    product_id: {
        type: Schema.ObjectId,
        ref: 'Product',
        unique: true
    },
    sell_id: {
        type: Schema.ObjectId,
        ref: 'Sell',
        unique: true
    },
    type: {
        type: String  // product, payment
    },
    created: {
        type: Date,
        default: Date.now
    }
});

NotificationSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Notification", NotificationSchema);
