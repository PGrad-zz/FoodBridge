# FoodBridge
FoodBridge app repo for Hack4Diversity

To Run the app:

- Run MongoDb locally
	Create a folder called data/db/
	```
		mkdir -p ./data/db

	``` 
		*mongod --dbpath ./data/db --port 27017* 

	Create a file called *mongodb_config_local.json* with this text:
	```	
		{
			"config": {
				"url": "mongodb://localhost:27017/foodbridge"
			}
		}

- Make sure you have nodemon installed:
	``` 
		*npm install -g nodemon*

- Then run from the commandline:
	``` 
		*npm run app*