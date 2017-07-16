var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require("mongodb").MongoClient;
var mongo_config = require("./config/mongodb_config");
var fs = require("fs");
var queryHandlers = require("./query_handlers.js");

var index = require('./routes/index');
var orders = require('./routes/orders');

//its global without var
app = express();
app.locals.user = null;

// view engine setup
app.set('views', path.join(__dirname, ""));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname));

app.use('/', index);
app.use('/orders', orders);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

fs.stat("./mongodb_config_local.json", function(fs_err, stats){
	if(fs_err == null){
		console.log("Using a local route");
		MongoClient.connect("mongodb://localhost:27017/foodbridge", function(err, database){
			if(err == null){
				app.use(function(req, res, next){
					req.db = database;
					console.log(req.db);
					next();
				})
				express.request.db = database;

				console.log("WORKING!");
				app.listen(8888);
			}
			else {
				console.log(err);
			}
		})

	} else{
		console.log("joining remote server");
		MongoClient.connect(mongo_config.uri, function(err, database){
			if(err == null){
				app.use(function(req, res, next){
					req.db = database;
					console.log(req.db);
					next();
				})
				app.listen(8888);
			}
			else {
				console.log(err);
			}

		})
	}
})


module.exports = app;
