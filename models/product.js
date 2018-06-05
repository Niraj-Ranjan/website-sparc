var mongoose = require('mongoose');

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
        required: true,
        default:true
    },
    imagetype: {
        type:String,
        max: 10,
        default: 'png'
    }
    /*categories: [{
        type: Schema.ObjectId,
        ref: 'ProductCategory'
    }]*/
});

// Virtual for product's images

ProductSchema
    .virtual('imageurl')
    .get(function () {
        return '/catalog/product/' + this._id + '.' + this.imagetype;
    });

//Export model
module.exports = mongoose.model('Product', ProductSchema);
