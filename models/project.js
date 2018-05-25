var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    owner: {
        type: String,
        required: true,
        max: 100
    },
    description: {
        type: String,
        max: 1000
    },
    date: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        min: 0,
    },
    url: {
        type: String,
    },
    categories: [{
        type: String,
        max: 100
    }]
});

// Virtual for product's images

ProjectSchema
    .virtual("images")
    .get(function () {
        return "/catalog/project/" + this._id;
    });

//Export model
module.exports = mongoose.model("Project", ProjectSchema);

