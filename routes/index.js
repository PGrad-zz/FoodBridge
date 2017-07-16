var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.db.collection);
  res.render('index', { title: 'Express' });
});

router.get('/charity', function(req, res, next) {
	console.log(req.db.collection);
  res.render('charity');
});

router.get('/donor', function(req, res, next) {
	console.log(req.db.collection);
  res.render('donor');
});

module.exports = router;
