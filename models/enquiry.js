var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EnquirySchema = new Schema({
    name: {
        type: String,
        //required: true,
        max: 100,
        default: "unknown"
    },
    comment: {
        type: String,
        max: 10000,
        default: "nothing"
    },
    email: {
        type: String,
        max: 100,
        default: "unknown"
    },
    status: {
        type: Boolean,
        //required: true,
        default: true
    },
    phone: [{
        type: String,
        max: 15,
        default: "unknown"
    }],
    date: {
        type: Date,
        default: Date.now
    }
});

//Export model
module.exports = mongoose.model('Enquiry', EnquirySchema);

