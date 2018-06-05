/* eslint-env node */

var Product = require('../models/product');

// Display list of all Products.
exports.product_list = function (req, res) {
    Product.find({})
        //.populate('categories')
        .exec(function (err, list_products) {
            if (err) {
                throw err;
            }
            //Successful, so render
            res.render('shop', {
                products: list_products
            });
            //res.send(list_products);
        });
};

exports.product_edit = function (req, res) {
    Product.find({})
        //.populate('categories')
        .exec(function (err, list_products) {
            if (err) {
                throw err;
            }
            //Successful, so render
            res.render('edit-products', {
                products: list_products
            });
            //res.send(list_products);
        });
};

// Display detail page for a specific Product.
exports.product_detail = function (req, res) {
    Product.findById(req.params.id)
        //.populate('categories')
        .exec(function (err, product) {
            if (err) {
                throw err;
            }
            //Successful, so render
            //console.log(product)
            res.send(product);
            //res.send(list_products);
        });
    //res.send('NOT IMPLEMENTED: Product detail: ' + String(req.params.id));
};


// Handle Product create on POST.
exports.product_create_post = function (req, res) {
    // Create a Book object with escaped and trimmed data.
    var product = new Product({
        name: req.body.product_name,
        description: req.body.product_description,
        cost: req.body.product_cost
    });

    product.save(function (err) {
        if (err) {
            throw err;
        }
        //successful - redirect to new book record.
        res.redirect('/dashboard/products');
    });


    //res.send('request recieved for product' + product.name);
};


// Handle Product delete on POST.
exports.product_delete_post = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function deleteAuthor(err) {
        if (err) {
            throw err;
        }
        // Success - go to author list
        res.redirect('/dashboard/products');
    });

    //es.send('NOT IMPLEMENTED: Product delete POST');
};


// Handle Product update on POST.
exports.product_update_post = function (req, res) {
    var product = new Product({
        name: req.body.product_name,
        description: req.body.product_description,
        cost: req.body.product_cost,
        _id: req.params.id
    });

    Product.findByIdAndUpdate(req.params.id, product, {}, function (err) {
        if (err) {
            throw err;
        }
        //successful - redirect to new book record.
        res.redirect('/dashboard/products');
    });
    //res.send('NOT IMPLEMENTED: Product update POST. id=' + req.params.id);
};