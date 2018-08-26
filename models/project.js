var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {
        type: String,
        //required: true,
        max: 100,
        default: "unknown"
    },
    owner: {
        type: String,
        //required: true,
        max: 100,
        default: "unknown"
    },
    description: {
        type: String,
        max: 1000,
        default: "unknown"
    },
    date: {
        type: Date,
        //required: true,
        default: new Date()
    },
    cost: {
        type: Number,
        //required: true,
        min: 0,
        default: 0
    },
    url: {
        type: String,
        default: ""
    },
    categories: [{
        type: String,
        max: 100
    }],
    image: {
        data: {
            type: Buffer,   
        },
        contentType: {
            type: String,
            max: 15,
            default: 'png'
        }
    }
});


ProjectSchema
    .virtual('dateformatted')
    .get(function () {
        return moment(this.date).format('MMMM Do, YYYY');
    });



//Export model
module.exports = mongoose.model('Project', ProjectSchema);

