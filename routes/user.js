const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const User = require("../models/user.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

// Signup
router.get("/signup", (req, res)=>{
    res.render("./users/signup.ejs");
})

router.post("/signup", wrapAsync(async (req, res)=>{
    try{
    const {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome to Stayvana!");
        res.redirect(req.session.redirectUrl); 
    }) 
    }catch(err){
        if (err.code === 11000 && err.keyPattern.email) {
            req.flash("error", "This email is already registered.");
        } else {
            req.flash("error", err.message); 
        }
        res.redirect("/signup");
    }
}))

//login 
router.get("/login", (req, res)=>{
    res.render("users/login.ejs");
})

router.post("/login",
    saveRedirectUrl,
    passport.authenticate('local', { 
        failureRedirect: '/login', 
        failureFlash: true
    }),
    (req, res) => {
        req.flash("success", "Welcome back to Stayvana!");
        const redirectUrl = req.session.redirectUrl || "/listings";
        delete req.session.redirectUrl;
        res.redirect(redirectUrl);
    })

//logout
router.get("/logout", (req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success", "You are Logged Out!");
        res.redirect("/listings");
    })
})

module.exports= router;