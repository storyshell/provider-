var express = require('express');
var path = require('path');
var router = express.Router();
var daoMethods = require('./dbpoll');

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
router.get('/blog/:id', function (req,res,next) {
  var blogPage = req.params.id;
  var a = [];
  var b = [];
  daoMethods.getComments(blogPage,function(err,result){
     if(!err){
     	//var b = JSON.stringify(result);
     	for( var i =0;i<result.length;i++){
     		a.push(result[i].comments);	
     	}	
        res.render('blog/'+blogPage,{data:a});
     }
  });
});


/*GET product detail page*/
router.get('/catalog/:id',function(req, res, next) {
   var productPage = req.params.id;
   var a = [];
   daoMethods.getComments(productPage,function(err,result){
     if(!err){
     	//var b = JSON.stringify(result);
     	for( var i =0;i<result.length;i++){
     		a.push(result[i].comments);	
     	}	
        res.render('catalog/'+productPage,{data:a});
     }
  });
});

/*save Comment into blog page in real time*/

/*editor option to post the blog in according to data*/
router.get('/editor',function(req, res, next){
   res.render('editor');
});



module.exports = router;
