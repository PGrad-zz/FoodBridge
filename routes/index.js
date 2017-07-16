var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.db.collection);
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req, res, next) {
	var posts = req.db.collection("order").find().toArray(function(err, results){
		console.log({posts: results});
	});
  	res.render('posts');
});

router.get('/post/new', function(req, res, next){
	res.render('post/index');
});

router.post('/post/new', function(req, res, next){
	console.log(req.body);
	res.redirect('../posts');
});

router.get('/donor', function(req, res, next) {
	console.log(req.db.collection);
  res.render('donor');
});

module.exports = router;

