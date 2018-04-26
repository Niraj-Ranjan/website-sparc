var express = require('express');
var router = express.Router();



router.get('/', function (req, res) {
    res.render('index');
});

router.get('/contact', function (req, res) {
    res.render('contact');
});





//export this router to use in our index.js
module.exports = router;
