var Enquiry = require('../models/enquiry');
var Product = require('../models/product');

// Display list of all Enquirys.
exports.enquiry_list = function (req, res) {
    Enquiry.find({},'_id comment status', {sort:{
        date: -1 //Sort by Date Added DESC
    }})
        .exec(function (err, list_all) {
            if (err) {
                throw err;
            }
            //Successful, so render
            res.render('dashboard', {
                enquiries: list_all
            });
            //res.send(list_products);
        });
    //res.send('NOT IMPLEMENTED: Enquiry list');
};

// Display list of all Enquirys.
exports.dashboard_list = function (req, res) {
    Enquiry.find({status: true},'_id comment status', {sort:{
        date: -1 //Sort by Date Added DESC
    }})
        .exec(function (err, list_unread) {
            if (err) {
                throw err;
            }
            //Successful, so render
            res.render('dashboard', {
                enquiries: list_unread
            });
            //res.send(list_products);
        });
};

// Display detail page for a specific Enquiry.
exports.enquiry_detail = function (req, res) {
    Enquiry.findById(req.params.id)
        .exec(function (err, enquiry) {
            if (err) {
                throw err;
            }
            //Successful, so render
            //console.log(product)
            res.send(enquiry);
            //res.send(list_products);
            enquiry.status = false;
            Enquiry.findByIdAndUpdate(req.params.id, enquiry, {}, function (err) {
                if (err) {
                    throw err;
                }
                //Successful, so render
                //console.log(product)
                //res.send(enquiry);
                //res.send(list_products);
            });
        });
    // res.send('NOT IMPLEMENTED: Enquiry detail: ' + req.params.id);
};


// Handle Enquiry create on POST.
exports.enquiry_create_post = function (req, res) {
    Product.findById(req.body.productid)
        .exec(function (err, pro) {
            
            var enquiry = new Enquiry({
                name: req.body.name,
                comment: req.body.comment,
                email: req.body.email,
                phone: req.body.phone
            });

            if (enquiry.comment == 'nothing') {
                enquiry.comment = 'About: ' + pro.name;
            }

            enquiry.save(function (err) {
                if (err) {
                    throw err;
                }
                //successful - redirect to new book record.
                res.send(pro);
            });


            //res.send('NOT IMPLEMENTED: Enquiry create POST');
        });
};

// Display Enquiry delete form on GET.
exports.enquiry_delete_get = function (req, res) {
    Enquiry.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            throw err;
        }
        // Success - go to author list
        res.redirect('/dashboard');
    });
};