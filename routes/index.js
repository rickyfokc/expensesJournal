var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('conceptIndex', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('conceptIndex', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('conceptAbout', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('conceptContact', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
  res.render('conceptProduct', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
  res.render('conceptServices', { title: 'Express' });
});


module.exports = router;
