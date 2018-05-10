var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductCategories = new Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100
    }
});

// Virtual for category's url

ProductCategories
    .virtual('url')
    .get(function () {
        return '/catalog/product/' + this.name;
    });

//Export model
module.exports = mongoose.model('ProductCategories', ProductCategories);
