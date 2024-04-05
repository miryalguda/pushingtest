const mongoose = require("mongoose");
const dotenv = require('dotenv');
const  path = require("path")

dotenv.config({ path: './config/.env' });

const db = async () => {
    try {
        const uri = process.env.MONGO_URI;
        const connect = await mongoose.connect("uri", {
            useNewUrlParser: true,
           
        });
        console.log(
            "Database connected successfully: ",
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.error(`Failed to connect to MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = db;


/*
import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  /* Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });

  
  console.log(
   "Pinged your deployment. You successfully connected to MongoDB!"
  );
} catch(err) {
  console.error("FAILED  TO CONNECT  TO MONGODB");
}

let db = client.db("myapp");

export default db;

------------------------------------------------

*/
/*
const mongoose = require("mongoose");
const db =
  "mongodb+srv://logrocket:<password>@cluster1.dydb2rf.mongodb.net/?retryWrites=true&w=majority";
*//* Replace <password> with your database password */
/*
mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;
*/