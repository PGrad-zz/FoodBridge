'use strict';

exports.list_all = function(req, res, doc) {
  var collection = req.db.collection(doc);
  // Find some documents and callback docs
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
};
