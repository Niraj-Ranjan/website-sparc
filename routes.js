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

router.get('/homepage', function (req, res) {
    res.render('homepage');
});




//export this router to use in our index.js
module.exports = router;
