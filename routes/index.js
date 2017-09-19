var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. which contain blog list*/
router.get('/', function(req, res, next) {
  res.render('index');
});

/*GET about page*/
router.get('/about', function(req, res, next) {
  res.render('about');
});

/*GET Contact us page*/
router.get('/contact',function(req, res, next) {
  res.render('contact');
});


/*GET product list page*/
router.get('/product', function(req, res, next) {
  res.render('product');
});	


/*GET blog detail page*/
router.get('/blog/:id',function(req, res, next) {
  var blogPage = req.params.id;    
  res.render(path.join('blog/',blogPage));
});

/*GET product detail page*/
router.get('product/:id',function(req, res, next) {
   var productPage = req.params.id;
   res.render(path.join('product/',productPage));
});

module.exports = router;
