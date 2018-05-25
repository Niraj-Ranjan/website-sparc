var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    description: {
        type: String,
        max: 1000
    },
    cost: {
        type: Number,
        required: true,
        min: 0,
    },
    status: {
        type: Boolean,
        required: true
    },
    categories: [{
        type: Schema.ObjectId,
        ref: 'ProductCategory'
    }]
});

// Virtual for product's images

ProductSchema
    .virtual('images')
    .get(function () {
        return '/catalog/product/' + this._id;
    });

//Export model
module.exports = mongoose.model('Product', ProductSchema);
