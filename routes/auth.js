const express = require("express");
const passport = require('passport');
const authRoutes = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Sign-up 
authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup-page");
});

authRoutes.post("/process-signup", (req, res, next) => {
  
 const {fullname, email, phoneNumber, password, latitude, longitude} = req.body;
 const location = {
                    type: 'Point',
                    coordinates: [ latitude, longitude ]
                  };
  if (email === "" || password === "") {
    res.render("auth/signup-page", { message: "Indicate email and password" });
    return;
  }

  User.findOne({ email }, "email", (err, user) => {
    if (user !== null) {
      res.render("auth/signup-page", { message: "The email already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    ;
    
   User.create({fullname, email, phoneNumber, encryptedPassword: hashPass, location })
   .then(() => {
      res.redirect("/");
   })
   .catch ((err) => {
     next (err);
   });
  });
});

// Log-in
authRoutes.get("/login", (req, res, next) => {
  res.render("auth/login-page", { "message": req.flash("error") });
});

authRoutes.post("/process-login",(req, res, next) => {
  const {email, password} =req.body;
  User.findOne({email})
  .then ((userDetails) => {
    if(!userDetails) {
      res.redirect ("auth/login-page");
      return;
    }

    const {encryptedPassword} = userDetails;
    console.log(userDetails);
    if(!bcrypt.compareSync(password, encryptedPassword)) {

       res.redirect("auth/login-page");
       return;
    }
    req.login(userDetails, () => {
        res.redirect("/");
    })
  })
  .catch ((err) => {
    next(err);
  })
});


// Log-out
authRoutes.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = authRoutes;
