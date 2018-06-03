var Enquiry = require('../models/enquiry');

// Display list of all Enquirys.
exports.enquiry_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Enquiry list');
};

// Display list of all Enquirys.
exports.dashboard_list = function(req, res) {
    Enquiry.find({})
        .exec(function (err, list_unread) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            res.render('dashboard', {
                enquiries: list_unread
            });
            //res.send(list_products);
        });
};

// Display detail page for a specific Enquiry.
exports.enquiry_detail = function(req, res) {
    Enquiry.findById(req.params.id)
        .exec(function (err, enquiry) {
            if (err) {
                return next(err);
            }
            //Successful, so render
            //console.log(product)
            res.send(enquiry);
            //res.send(list_products);
        });
    // res.send('NOT IMPLEMENTED: Enquiry detail: ' + req.params.id);
};

// Display Enquiry create form on GET.
exports.enquiry_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Enquiry create GET');
};

// Handle Enquiry create on POST.
exports.enquiry_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Enquiry create POST');
};

// Display Enquiry delete form on GET.
exports.enquiry_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Enquiry delete GET');
};

// Handle Enquiry delete on POST.
exports.enquiry_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Enquiry delete POST');
};

// Display Enquiry update form on GET.
exports.enquiry_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Enquiry update GET');
};

// Handle Enquiry update on POST.
exports.enquiry_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Enquiry update POST');
};
