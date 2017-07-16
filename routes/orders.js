var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var events = db.collection('order'); 
  res.render('index', {some: "data"});
});

module.exports = router;
