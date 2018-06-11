var mongoose = require('mongoose');

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
    imagetype: {
        type:String,
        max: 10,
        default: 'png'
    }
});

// Virtual for product's images

ProjectSchema
    .virtual('imageurl')
    .get(function () {
        return '/catalog/project/' + this._id + '.' + this.imagetype;
    });

//Export model
module.exports = mongoose.model('Project', ProjectSchema);

