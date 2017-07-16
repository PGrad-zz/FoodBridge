var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var MongoClient = require("mongodb").MongoClient;
var mongo_config = require("./config/mongodb_config")
var fs = require("fs");


var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/home"] = requestHandlers.home;

fs.stat("./mongodb_config_local.json", function(fs_err, stats){
	if(fs_err == null){
		console.log("Using a local route"); 
		MongoClient.connect("mongodb://localhost:27017/foodbridge", function(err, db){
			if(err == null){
				console.log("WORKING!");
				server.start(router.route, handle);
			}
			else {
				console.log(err);
			}
			db.close();
		})
		
	} else{
		console.log("joining remote server");
		MongoClient.connect(mongo_config.uri, function(err, db){
			if(err == null){
				server.start(router.route, handle);
			}
			else {
				console.log(err);
			}
			db.close();
		})
	}
})



