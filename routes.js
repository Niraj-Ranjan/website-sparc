var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
    res.render('index');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});

router.get('/about', function (req, res) {
    res.render('about');
});

router.get('/trial', function (req, res) {
    res.render('trial');
});





//export this router to use in our index.js
module.exports = router;
