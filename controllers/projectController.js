/* eslint-env node */




var mime = require('mime');
var multer = require('multer');



// -----

var Project = require('../models/project');

// Display list of all Projects.
exports.project_list = function (req, res) {
    Project.find({})
        .exec(function (err, list_projects) {
            if (err) {
                throw err;
            }
            //Successful, so render
            res.render('gallery', {
                projects: list_projects
            });
            //res.send(list_projects);
        });
    //res.send('NOT IMPLEMENTED: Project list');
};

exports.project_edit = function (req, res) {
    Project.find({})
        .exec(function (err, list_projects) {
            if (err) {
                throw err;
            }
            //Successful, so render
            res.render('edit-projects', {
                projects: list_projects
            });
            //res.send(list_projects);
        });
};

// Display detail page for a specific Project.
exports.project_detail = function (req, res) {
    Project.findById(req.params.id)
        .exec(function (err, project) {
            if (err) {
                throw err;
            }
            //Successful, so render
            //console.log(product)
            res.send(project);
            //res.send(list_products);
        });
};


// Handle Project create on POST.
exports.project_create_post = function (req, res) {

    // Create a Book object with escaped and trimmed data.
    var project = new Project({
        //name: req.body.product_name,
        //description: req.body.product_description,
        //cost: req.body.product_cost
    });


    var storage = multer.diskStorage({
        destination: './www/catalog/project',
        filename: function (req, file, cb) {

            cb(null, project._id + '.' + mime.getExtension(file.mimetype));
        }
    });

    var upload = multer({
        storage: storage
    }).any();

    upload(req, res, function (err) {
        if (err) {
            throw err;
            //return res.end('Error uploading file.');
        } else {
            //console.log(req.body);
            //console.log(req.files);

            /* */
            project.name = req.body.project_name;
            project.owner = req.body.project_owner;
            project.description = req.body.project_description;
            project.date = req.body.project_date;
            project.cost = req.body.project_cost;
            project.url = req.body.project_url;
            project.categories = req.body.project_categories;
            project.imagetype = mime.getExtension(req.files[0].mimetype);
            //console.log(product);

            project.save(function (err) {
                if (err) {
                    throw err;
                }
                //successful - redirect to new book record.
                res.redirect('/dashboard/projects');
            });

            //res.end("File has been uploaded");
            /**/
        }

    });


    //res.send('NOT IMPLEMENTED: Project create POST');
};


// Handle Project delete on POST.
exports.project_delete_post = function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            throw err;
        }
        // Success - go to author list
        res.send(true);
    });

    // res.send('NOT IMPLEMENTED: Project delete POST');
};


// Handle Project update on POST.
exports.project_update_post = function (req, res) {

    // Create a Book object with escaped and trimmed data.
    var project = new Project({
        //name: req.body.product_name,
        //description: req.body.product_description,
        //cost: req.body.product_cost
    });


    var storage = multer.diskStorage({
        destination: './www/catalog/project',
        filename: function (req, file, cb) {

            cb(null, req.params.id + '.' + mime.getExtension(file.mimetype));
        }
    });

    var upload = multer({
        storage: storage
    }).any();

    upload(req, res, function (err) {
        if (err) {
            throw err;
            //return res.end('Error uploading file.');
        } else {
            //console.log(req.body);
            //console.log(req.files);


            project.name = req.body.project_name;
            project.owner = req.body.project_owner;
            project.description = req.body.project_description;
            project.date = req.body.project_date;
            project.cost = req.body.project_cost;
            project.url = req.body.project_url;
            project._id = req.params.id;
            project.categories = req.body.project_categories;
            project.imagetype = mime.getExtension(req.files[0].mimetype);
            //console.log(product);

            Project.findByIdAndUpdate(req.params.id, project, {}, function (err) {
                if (err) {
                    throw err;
                }
                //successful - redirect to new book record.
                res.redirect('/dashboard/projects');
            });

            //res.end("File has been uploaded");
        }
    });

    //res.send('NOT IMPLEMENTED: Project update POST');
};
