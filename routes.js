var express = require('express');
var router = express.Router();



router.get('/', (req, res) => res.render('index'));

router.get('/contact', (req, res) => res.render('contact'));

router.get('/about', (req, res) => res.render('about'));

router.get('/trial', (req, res) => res.render('trial'));

router.get('/homepage', (req, res) => res.render('homepage'));

<<<<<<< HEAD
router.get('/gallery', function (req, res) {
    res.render('gallery');
});

router.get('/ec', function (req, res) {
    res.render('e-comm');
});
=======
router.get('/ec', (req, res) => res.render('e-comm'));
>>>>>>> origin/master




//export this router to use in our index.js
module.exports = router;
