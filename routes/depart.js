const express = require("express");
const passport = require('passport');
const departRoutes = express.Router();
const User = require("../models/User");

const Product = require("../models/Product");


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

departRoutes.get("/departments", (req, res, next) => {
  res.render("depart/departments-page");
});

departRoutes.get("/allproducts", (req, res, next) => {  
  Product.find()    
    .then((productsFromDb) => {
      productsFromDb.map(function(a) {
          a = a.toObject()        
          a.isMe = false;     
          if(req.user !== undefined && req.user._id.toString() === a.userId.toString()){
              a.isMe = true;
          }
          return a; 
        })   
       res.render("depart/products", { productList: productsFromDb });
    })
    .catch((err) => {      
      next(err);
    });
  });

module.exports = departRoutes;