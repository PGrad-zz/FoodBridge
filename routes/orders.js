var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var orders = db.collection('order');
  var results = orders.find();  
  res.render('index', results);
});

module.exports = router;
