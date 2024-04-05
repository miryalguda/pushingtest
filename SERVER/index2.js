const  express = require("express")
const  mongoose = require ("mongoose")
const  cors = require("cors")
const UserModel = require ("./model/user.js")
const  bcrypt = require ("bcrypt")
const app = express();
const jwt  = require  ("jsonwebtoken")
const cookieParser = require ("cookie-parser")
const Trans = require("./model/Alldata.js")
const Withdraw = require ("./model/withdrawModel.js")

/*
const dotenv = require('dotenv');
const PORT = process.env.PORT;
const uri         = process.env.MONGO_URI;
dotenv.config({ path: './config/.env' });app.use(express.json());
*/

app.use(cors( {
    origin: [ " http://localhost:3000" ],
    methods:  [ "GET", "POST"],
    credentials: true
}));

app.use(express.json())
app.use(cookieParser())


mongoose.connect("mongodb+srv://mern123:NAVnagum@merncluster.drrc1dm.mongodb.net/merndatabase?retryWrites=true&w=majority")

const  verifyUser = (req, res, next) => {
    const  token = req.cookies.token;
    if (!token){
        return res.json ("the token was  not available")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) return  res.json ("token is wrong")
            next();
        })
    }
    
}

app.get ("/home", verifyUser, (req, res) => {
    return res.json ("Success")

})

app.post ("/login",  (req, res) => {
  const {email, password}  = req. body;
  UserModel.findOne ({email: email})
  .then (user => {
    if (user) {

bcrypt.compare(password, user.password, (err, response) => {
   
    if (response) {
        const  token = jwt.sign ( { email: user.email}, "jwt-secret-key", {expiresIn: "1d"})
        res.cookie ("token", token)
        res.json("success")
        console.log("token created. check in application-cookie in browser!")
    }
    else {
        res.json ("the password is incorrect")
    }
  })

}else {
      res.json("No record existed")
     
    }
  })
})



app.post ("/register", (req, res) => {
  const {name, email, password} = req.body;

  bcrypt.hash(password, 10).then(hash =>  {
    UserModel.create({ name, email, password: hash })
    .then (users => res.json (users))
    .catch (err => res.json(err))
  }).catch (err => console.log (err.message))
 
})

app.post("/trans", async (req, res) => {
  const {deposit, amount, totalState, initialBalance, newTotal} = req.body;
  const newTrans = new Trans({ ...req.body });
  const insertedTrans = await newTrans.save();
  return res.status(201).json(insertedTrans);
});

app.post("/withdraw/", async (req, res) => {
  const {withdraw,  initialBalance, newTotal} = req.body;
  const newWithdraw = new Withdraw({ ...req.body });
  const insertedWithdraw = await newWithdraw.save();
  return res.status(201).json(insertedWithdraw);
});
/*

app.post ("/trans", (req, res) => {
  const { amount} = req.body;
 
    TransModel.create({ amount })
    .then (trans => res.json (trans))
    .catch (err => res.json(err))
  .catch (err => console.log (err.message))
 
})

app.post("/trans", async (req, res) => {
  const {deposit, amount, totalState} = req.body;
  const newTrans = new Trans({ ...req.body });
  const insertedTrans = await newTrans.save();
  return res.status(201).json(insertedTrans);
});

app.get("/trans", (req, res) => {
  Trans.find()
  .then (res => res.json(trans))
  .catch (err => res.json (err))
   console.log(res);
 }); 

/*
  app.post("/register", async (req, res) => {
  const newEmployee= new Employee({ ...req.body });
  const insertedEmployee = await newEmployee.save();
  return res.status(201).json(insertedEmployee);
});



app.get("/getEmployees", (req, res) => {
 EmployeeModel.find()
 .then (employees => res.json(employees))
 .catch (err => res.json (err))
  
}); 

app.get("/gettrans", (req, res) => {
  Trans.find()
  .then (trans => res.json(trans))
  .catch (err => res.json (err))
   
 }); 
  */
  app.listen(3260, () => {
    console.log("Server started on port 3260")


  })
  