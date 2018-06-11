var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EnquirySchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    comment: {
        type: String,
        max: 10000
    },
    email: {
        type: String,
        max: 100,
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    phone: [{
        type: String,
        max: 15
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

//Export model
module.exports = mongoose.model('Enquiry', EnquirySchema);

