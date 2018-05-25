var express = require("express");
var router = express.Router();



router.get('/', (req, res) => res.render('index'));

router.get('/contact', (req, res) => res.render('contact'));

router.get('/about', (req, res) => res.render('about'));

router.get('/trial', (req, res) => res.render('trial'));

router.get('/homepage', (req, res) => res.render('homepage'));

router.get('/gallery', (req, res) => res.render('gallery'));

router.get('/shop', (req, res) => res.render('shop'));

router.get('/abbout', (req, res) => res.render('abbout'));

router.get('/ec', (req, res) => res.render('ec'));

router.get('/e-comm', (req, res) => res.render('e-comm'));

router.get('/admin', (req, res) => res.render('admin'));

router.get('/dashboard', (req, res) => res.render('dashboard'));

router.get('/updatepro', (req, res) => res.render('updatepro'));

router.get('/addpro', (req, res) => res.render('addpro'));

router.get('/delpro', (req, res) => res.render('delpro'));

router.get('/404', (req, res) => res.render('404'));

47501


// Sample routes -----

router.get("/shop/:id", (req, res) => res.send({
    id: req.params.id,
    name: "sample product",
    description: "some really long description of non existing product",
    cost: 300,
    status: true,
    categories: ["cat1", "cat2"]
}));

router.get("/gallery/:id", (req, res) => res.send({
    id: req.params.id,
    name: "sample property",
    owner: "some person",
    date: Date.now,
    description: "some really long description of non existing property",
    cost: 300000,
    url: "https://www.github.com",
    categories: ["commercial", "office"],
}));

// -----




// Data Routes -----

var async = require('async')

// Require controller modules.
var enquiry_controller = require('./controllers/enquiryController');
var product_controller = require('./controllers/productController');
var productcategory_controller = require('./controllers/productcategoryController');
var project_controller = require('./controllers/projectController');



// GET catalog home page.
router.get('/shop', function (req, res) {
    res.send('NOT IMPLEMENTED: Shop');
});

/// ENQUIRY ROUTES ///

// GET request for creating a Enquiry. NOTE This must come before routes that display Enquiry (uses id).
router.get('/enquiry/create', enquiry_controller.enquiry_create_get);

// POST request for creating Enquiry.
router.post('/enquiry/create', enquiry_controller.enquiry_create_post);

// GET request to delete Enquiry.
router.get('/enquiry/:id/delete', enquiry_controller.enquiry_delete_get);

// POST request to delete Enquiry.
router.post('/enquiry/:id/delete', enquiry_controller.enquiry_delete_post);

// GET request to update Enquiry.
router.get('/enquiry/:id/update', enquiry_controller.enquiry_update_get);

// POST request to update Enquiry.
router.post('/enquiry/:id/update', enquiry_controller.enquiry_update_post);

// GET request for one Enquiry.
router.get('/enquiry/:id', enquiry_controller.enquiry_detail);

// GET request for list of all Enquiry items.
router.get('/enquiries', enquiry_controller.enquiry_list);

/// PRODUCT ROUTES ///

// GET request for creating product. NOTE This must come before route for id (i.e. display product).
router.get('/product/create', product_controller.product_create_get);

// POST request for creating product.
router.post('/product/create', product_controller.product_create_post);

// GET request to delete product.
router.get('/product/:id/delete', product_controller.product_delete_get);

// POST request to delete product.
router.post('/product/:id/delete', product_controller.product_delete_post);

// GET request to update product.
router.get('/product/:id/update', product_controller.product_update_get);

// POST request to update product.
router.post('/product/:id/update', product_controller.product_update_post);

// GET request for one product.
router.get('/product/:id', product_controller.product_detail);

// GET request for list of all products.
router.get('/products', product_controller.product_list);

/// CATEGORY ROUTES ///

// GET request for creating a category. NOTE This must come before route that displays category (uses id).
router.get('/productcategory/create', productcategory_controller.productcategory_create_get);

//POST request for creating category.
router.post('/productcategory/create', productcategory_controller.productcategory_create_post);

// GET request to delete category.
router.get('/productcategory/:id/delete', productcategory_controller.productcategory_delete_get);

// POST request to delete category.
router.post('/productcategory/:id/delete', productcategory_controller.productcategory_delete_post);

// GET request to update category.
router.get('/productcategory/:id/update', productcategory_controller.productcategory_update_get);

// POST request to update category.
router.post('/productcategory/:id/update', productcategory_controller.productcategory_update_post);

// GET request for one category.
router.get('/productcategory/:id', productcategory_controller.productcategory_detail);

// GET request for list of all category.
router.get('/productcategories', productcategory_controller.productcategory_list);

/// PROJECT ROUTES ///

// GET request for creating a project. NOTE This must come before route that displays project (uses id).
router.get('/project/create', project_controller.project_create_get);

// POST request for creating project.
router.post('/project/create', project_controller.project_create_post);

// GET request to delete project.
router.get('/project/:id/delete', project_controller.project_delete_get);

// POST request to delete project.
router.post('/project/:id/delete', project_controller.project_delete_post);

// GET request to update project.
router.get('/project/:id/update', project_controller.project_update_get);

// POST request to update project.
router.post('/project/:id/update', project_controller.project_update_post);

// GET request for one project.
router.get('/project/:id', project_controller.project_detail);

// GET request for list of all project.
router.get('/projects', project_controller.project_list);



//export this router to use in our index.js
module.exports = router;
