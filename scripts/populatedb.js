#! /usr/bin/env node

console.log('This script populates some test projects, products, productCategorys and projectinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')

var Product = require('../models/product')
var Project = require('../models/project')
var ProductCategory = require('../models/productcategory')
var Enquiry = require('../models/enquiry')


var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var products = []
var productCategories = []
var projects = []
var enquiries = []

function productCreate(name, description, cost, status, categories, cb) {
    productdetail = {
        name: name,
        description: description,
        cost: cost,
        status: status,
        categories: categories
    }


    var product = new Product(productdetail);

    product.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New product: ' + product);
        products.push(product)
        cb(null, product)
    });
}

function productCategoryCreate(name, cb) {
    var productCategory = new ProductCategory({
        name: name
    });

    productCategory.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log('New productCategory: ' + productCategory);
        productCategories.push(productCategory)
        cb(null, productCategory);
    });
}

function projectCreate(name, owner, description, date, cost, url, categories, cb) {
    projectdetail = {
        name: name,
        owner: owner,
        description: description,
        date: date,
        cost: cost,
        url: url,
        categories: categories
    }

    var project = new Project(projectdetail);
    project.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New project: ' + project);
        projects.push(project)
        cb(null, project)
    });
}


function enquiryCreate(name, comment, email, status, phone, date, cb) {
    enquirydetail = {
        name: name,
        comment: comment,
        email: email,
        status: status,
        phone: phone,
        date: date
    }


    var enquiry = new Enquiry(enquirydetail);
    enquiry.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New enquiry: ' + enquiry);
        enquiries.push(enquiry)
        cb(null, enquiry)
    });
}


function createProductCategory(cb) {
    async.parallel([
        function (callback) {
                productCategoryCreate("chair", callback);
        },
        function (callback) {
                productCategoryCreate("lamp", callback);
        },
        function (callback) {
                productCategoryCreate("wood", callback);
        },
        ],
        cb);
}

function createProduct(cb) {
    async.parallel([
        function (callback) {
                productCreate("woodlamp", "wooden lamp description", 300, true, [productCategories[2], productCategories[1],], callback);
        },
        function (callback) {
                productCreate("woodchair", "wooden chair description", 300, true, [productCategories[2], productCategories[0],], callback);

        },
        function (callback) {
                productCreate("lamp", "lamp description", 300, true, [productCategories[1], ], callback);

        },
        function (callback) {
                productCreate("chair", "chair description", 300, true, [productCategories[0], ], callback);

        },
        ],
        // optional callback
        cb);
}


function createprojects(cb) {
    async.parallel([
        function (callback) {
                projectCreate("project 1", "owner 1", "description for 1", "1998-07-27", 234000, "http://google.com", ["commercial", "office"], callback);
        },
        function (callback) {
                projectCreate("project 2", "owner 2", "description for 2", "1968-07-27", 234000, "http://google.com", ["commercial", "shop"], callback);
        },
        function (callback) {
                projectCreate("project 3", "owner 2", "description for 3", "1998-05-27", 234000, "http://google.com", ["residential", "bunglow"], callback);
        },
        function (callback) {
                projectCreate("project 4", "owner 3", "description for 4", "1999-07-29", 234000, "http://google.com", ["residential", "farmhouse"], callback);
        },
        function (callback) {
                projectCreate("project 5", "owner 4", "description for 5", "1990-07-24", 234000, "http://google.com", ["residential", "apartment"], callback);
        }
        ],
        // optional callback
        cb);
}


function createenquiries(cb) {
    async.parallel([
        function (callback) {
                enquiryCreate("name 1", "comment 1", "email 1", true, "phone 1", "2005-05-23", callback)
        },
        function (callback) {
                enquiryCreate("name 2", "comment 2", "email 2", true, "phone 2", "2010-06-04", callback)
        },
        function (callback) {
                enquiryCreate("name 3", "comment 3", "email 3", true, "phone 3", "2009-09-09", callback)
        }
        ],
        // Optional callback
        cb);
}



async.series([
    createProductCategory,
    createProduct,
    createprojects,
    createenquiries
],
    // Optional callback
function (err, results) {
    if (err) {
        console.log('FINAL ERR: ' + err);
    } else {
        console.log('Enquiries: ' + enquiries);

    }
    // All done, disconnect from database
    mongoose.connection.close();
});
