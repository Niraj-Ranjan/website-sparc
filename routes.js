var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
    res.render('index');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/trial', function (req, res) {
    res.render('trial');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/homepage', function (req, res) {
    res.render('homepage');
});

router.get('/ec', function (req, res) {
    res.render('e-comm');
});




//export this router to use in our index.js
module.exports = router;
