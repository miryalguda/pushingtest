var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("mydb Database created!");
  db.close();
});
