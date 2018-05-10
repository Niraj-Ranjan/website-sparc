var express = require('express');
var router = express.Router();



router.get('/', (req, res) => res.render('index'));

router.get('/contact', (req, res) => res.render('contact'));

router.get('/about', (req, res) => res.render('about'));

router.get('/trial', (req, res) => res.render('trial'));

router.get('/homepage', (req, res) => res.render('homepage'));

router.get('/gallery', (req, res) => res.render('gallery'));

router.get('/abbout', (req, res) => res.render('abbout'));

router.get('/ec', (req, res) => res.render('ec'));

router.get('/e-comm', (req, res) => res.render('e-comm'));
//export this router to use in our index.js
module.exports = router;
