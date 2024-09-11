const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.js");
const app = express();
const session = require("express-session");
const passport =  require("passport");
const localStrategy = require("passport-local");

const sessionOptions = {
    secret: "kdsghhiosdgon",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    },
};

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.json());
app.use(cors());

main().then(() => {
    console.log("connected to db");
}).catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/SafeCard");
};

app.post("/register",async (req,res) => {
    try {
        let {username,email,password} = req.body;
        console.log("uep",req.body);
        if(username && email && password){ 
            const newUser = new User({username,email});
            let registeredUser = await User.register(newUser,password);
            console.log(registeredUser);
            req.login(registeredUser,(err) =>{
                if(err){
                    return next(err);
                };
        });
        }    
    } catch (error) {
        console.log("try",error);    
    }
});

app.post('/login',
    passport.authenticate('local',{failureRedirect: '/login' }),
        async(req,res) => {
        res.redirect('http://localhost:5173/contact');
        console.log("login",req.body);
});

app.listen('3001',() => {
    console.log("server is running");
});