const express = require("express");
const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://aniket:aniket5552@loginsystem.2nptqty.mongodb.net/login_reg?retryWrites=true&w=majority",
  () => {
    console.log("DB connected");
  }
);

app.get("/users", (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


// User Register
app.post("/register", (req, res) => {
  const { email, username, password } = req.body;
  userModel.findOne({email:email},async (err,user)=>{
    if(user){
          console.log("User Already Registered")
          res.send({message:"User already registered"})
    }
    else{
        const user = req.body;
        const newUser = new userModel(user);
        await newUser.save();
        res.send({ message: "Sucessfully registered" });
    }
  })
 
});

// User Login
app.post("/login",(req,res)=>{
    const { email, password } = req.body;
    
    userModel.findOne({email:email},(err,user)=>{
        if(user){
            if(user.password!==password){
                res.send({message:"Invalid login details",user:user},)
            }
            else{
                res.send({message:"Sucessfully Logged In!",user:user})
            }
        }
        else{
            res.send({message:"user not registered"})
        }
    })
})

app.listen(5000, () => {
  console.log("SERVER RUNNING");
});

// user model
const userShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("users", userShema);
