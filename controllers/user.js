const User = require("../models/user.js");

//Sign Up
module.exports.rendersignupForm = (req, res)=>{
    res.render("./users/signup.ejs");
}

module.exports.signup = async (req, res)=>{
    try{
    const {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err)=>{
        if(err){
            return next(err);
        }
        req.flash("success", "Welcome to Stayvana!");
        res.redirect("/listings"); 
    }) 
    }catch(err){
        if (err.code === 11000 && err.keyPattern.email) {
            req.flash("error", "This email is already registered.");
        } else {
            req.flash("error", err.message); 
        }
        res.redirect("/signup");
    }
}

//Login 
module.exports.renderLoginForm = (req, res)=>{
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
        req.flash("success", "Welcome back to Stayvana!");
        const redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
}

//Log Out 
module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
        req.flash("success", "You are Logged Out!");
        res.redirect("/listings");
    })
}