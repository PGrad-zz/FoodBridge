var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  var db = req.db;
  var orders = db.collection('order');
  var results = orders.find();  
  res.render('index', results);
});

router.post('/', function(req, res) {
	var db = req.db;
	var orders = db.collection('order');
	var results = order.insert();
});

module.exports = router;