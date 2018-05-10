var express = require('express');
var router = express.Router();



router.get('/', (req, res) => res.render('index'));

router.get('/contact', (req, res) => res.render('contact'));

router.get('/about', (req, res) => res.render('about'));

router.get('/trial', (req, res) => res.render('trial'));

router.get('/homepage', (req, res) => res.render('homepage'));

router.get('/gallery', (req, res) => res.render('gallery'));

router.get('/abbout', (req, res) => res.render('abbout'));

<<<<<<< HEAD
router.get('/ec', (req, res) => res.render('ec'));

router.get('/e-comm', (req, res) => res.render('e-comm'));
=======


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




>>>>>>> origin/master
//export this router to use in our index.js
module.exports = router;
