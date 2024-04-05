




const dotenv = require('dotenv');
const  path = require("path")

dotenv.config({ path: './config/.env' });



/*
const MongoClient = require('mongodb').MongoClient;
const url         = process.env.MONGO_URI;
const db = null;
 
// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log("Connected successfully to db server");

    // connect to myproject database
    db = client.db('myproject');
});


const { MongoClient } = require("mongodb");
const url         = process.env.MONGO_URI; 
// Replace the following with your Atlas connection string                                                                                                                                        
// Connect to your Atlas cluster
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
*/
/*
const mongodb = context.services.get("mongodb-atlas");
const itemsCollection = mongodb.db("store").collection("items");
*/
const MongoClient = require('mongodb').MongoClient;
const url         = process.env.MONGO_URI; 
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    
}
run().catch(console.dir);

var dbo = client.db("mydb");
const collection = dbo.collection('users');


    /*
const connection= MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected successfully to server");
    var dbo = db.db("mydb");
    const collection = dbo.collection('employees');
})
*/

// create user account
function create(name, email, password){
    return new Promise((resolve, reject) => { 
             
    const doc = {name, email, password, balance: 0};
    collection.insertOne(doc, {w:1}, function(err, result) {
      err ? reject (err) : resolve (doc);
      console.log("1 document inserted");
      
    });
  });
}


// find user account
function find(name, email, password){
    return new Promise((resolve, reject) => { 
    
      
        
          collection.find(name, email, password)
            .toArray(function(err, result) {
                err ? reject(err) : resolve(result);
                console.log(  result)

        });    
    });
}

function findOne(email){
    return new Promise((resolve, reject) => {    
       
            collection
            .findOne({email: email})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));
            console.log("found the requested  email")    
    })
}

function all(){
    return new Promise((resolve, reject) => {    
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

/*
function create(name, email, password){
    return new Promise((resolve, reject) => { 

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("merndatabase");
    const collection = dbo.collection('employees');

    const doc = {name, email, password, balance: 0};
    collection.insertOne(doc, {w:1}, function(err, result) {
      err ? reject (err) : resolve (doc);
      console.log("1 document inserted");
      db.close();
    });
  });
    })}

*/

/*
// create user account
 function create(name, email, password){
    return new Promise((resolve, reject) => { 
         
        const collection = mongodb.db("merndatabase").collection('employees');
        const doc = {name, email, password, balance: 0};
         collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });    
    })
}

// find user account
 function find(email){
    return new Promise((resolve, reject) => { 
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        const collection = dbo.collection('employees');    

      
          collection.find({email: email})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    });
})}   
*/
/*
// find user account
function findOne(email){
    return new Promise((resolve, reject) => {    
        const customers = mongodb.db
            .collection('users')
            .findOne({email: email})
            .then((doc) => resolve(doc))
            .catch((err) => reject(err));    
    })
}

// update - deposit/withdraw amount
function update(email, amount){
    return new Promise((resolve, reject) => {    
        const customers = mongodb.db
            .collection('users')            
            .findOneAndUpdate(
                {email: email},
                { $inc: { balance: amount}},
                { returnOriginal: false },
                function (err, documents) {
                    err ? reject(err) : resolve(documents);
                }
            );            


    });    
}

// all users
function all(){
    return new Promise((resolve, reject) => {    
        const customers = mongodb.db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
        });    
    })
}

*/
module.exports = {create, find};
