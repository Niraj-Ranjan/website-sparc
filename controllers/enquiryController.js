var Enquiry = require('../models/enquiry');

// Display list of all Enquirys.
exports.enquiry_list = function (req, res) {
    Enquiry.find({})
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
    Enquiry.find({status:true})
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
    res.send('NOT IMPLEMENTED: Enquiry create POST');
};

// Display Enquiry delete form on GET.
exports.enquiry_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Enquiry delete GET');
};

