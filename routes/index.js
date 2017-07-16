var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.db.collection);
  res.render('index', { title: 'Express' });
});

router.post('/donor/login', function(req, res){
	var accnt = req.db.collection("account");
	accnt.find({email: req.body.email}, function(err, record){
		if(err){
			console.log("couldn't find record, redirecting");
			res.redirect("../");
		}
		else{
			if(record.password == req.body.password){
				console.log("password correct");
				res.redirect("../posts");	
			}
			else{
				console.log("password wrong");
				res.redirect("../");
			}
			
		}
	})
})

router.post('/charity/login', function(req, res){
	var accnt = req.db.collection("account");
	accnt.find({email: req.body.email} , function(err, record){
		if(err){
			console.log("couldn't find record, redirecting");
			res.redirect("../");
		}
		else{
			if(record.password == req.body.password){
				console.log("password correct");
				res.redirect("../posts");	
			}
			else{
				console.log("password wrong");
				res.redirect("../");
			}			
		}
	})
});

router.post('/register', function(req, res){
	var orgs = req.db.collection("organization");
	var accnt = req.db.collection("account");
	var account = {
		name: req.body.orgname,
		email: req.body.email,
		password: req.body.password,
		organization: req.body.role,
		address: req.body.address,
		website: req.body.website
	}
	var organization = {
		type: req.body.role,
		name: req.body.orgname,
		email: req.body.email,
		password: req.body.password,
		address: req.body.address,
		website: req.body.website
	}
	console.log(account);
	accnt.find({email: req.body.email} , function(err, record){
		if(err){
			console.log("couldn't find record, redirecting");
			res.redirect("../");
		}
		else{
			if(record.length){
				console.log("Account already made for this email");	
			}
			else{
				accnt.insert(account, function(err, data){
				console.log("Inserting account record");
				});
			}			
		}
	})
	orgs.find({email: req.body.email} , function(err, record){
		if(err){
			console.log("couldn't find record, redirecting");
			res.redirect("../");
		}
		else{
			if(record.length){
				console.log("Account already made for this email");
				res.redirect("../");	
			}
			else{
				orgs.insert(organization, function(err, data){
				console.log("Inserting organization record");
				res.redirect("../posts");
				});
			}			
		}
	}) 
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
	var newPost = {
		food_type: "none",
		title: req.body.title,
		pickup_location: req.body.location,
		time: req.body.time_type,
		quantity: req.body.quantity,
		rating: 0,
		organization: "none",
		description: "string",
		claimant: "none",
		expired: false,
		phone: req.body.phone,
		created: new Date()
	};
	console.log(newPost);
	req.db.collection("order").insert(newPost, function(err, records){
  	console.log("Record added as "+records);
	});
	res.redirect('../posts');
});

router.get('/donor', function(req, res, next) {
	console.log(req.db.collection);
  res.render('donor');
});

module.exports = router;

/*{
    "organization": {
        "type": ["vendor", "charity"],
        "name": "string",
        "address": "string",
        "ratings": {},
        "website": "string",
        "description": "string"
    },
    "order": {
        "food_type": "string",
        “title”: “string”
        "pickup_location": "string",
        "time": "time_type",
        "quantity": 0,
        "rating": 0,
        "organization": "organization",
        "description": "string",
        "claimant": "string",
        "expired": "boolean"
    },
    "account": {
        "email": "string",
        "password": "string",
        "organization": "organization",
        "address": "",
        "website": "",
        "description": ""
    }
}
*/
