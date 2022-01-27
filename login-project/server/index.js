const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//database
const DB =`mongodb+srv://shivaditya:kumar@cluster0.wlaxr.mongodb.net/LoginMERN?retryWrites=true&w=majority`
mongoose.connect(DB).then(()=>{
    console.log("MongoDB connection successfull");
}).catch((err)=> console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    password: String
})

const User = new mongoose.model("User", userSchema);

app.post('/login', (req, res) => {
    const {email, password} = req.body
    User.findOne({email: email}, (err, user)=>{
        if(user){
            if(password=== user.password){
                res.send({message:"Login Successfully", user:user})
            }else{
                res.send({message:"Login Failure password did not match"})
            }
        }else{
            res.send({message:"Login Failure Invalid User"})
        }
    })
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email}, (err, user)=>{
        if(user){
            res.send({message: "User already registered"});
            
        }else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send( { message : "Successfully Register"})
                }
            })
        }
    })
    
});

app.listen(9000, ()=>{
    console.log("Server running on PORT : 9000 ");
});

