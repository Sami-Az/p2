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


// All products route
departRoutes.get("/allproducts", (req, res, next) => {
  console.log('yolo')
  Product.find()
    
    .then((productsFromDb) => {
       //res.locals.productList = productsFromDb;
      

        res.render("depart/products",{productList: productsFromDb});

       
    })
    .catch((err) => {
      
      next(err);
    });
  });

  // Electronics route
departRoutes.get("/allproducts/electronics", (req, res, next) => {
  Product.find({productType: "Electronics"})
   
  .then((productsFromDb) => {
    console.log(productsFromDb);
    res.locals.productList = productsFromDb
    res.render("depart/electronics");
  })
  .catch((err) => {
    next(err);
  })
});


// Home appliance route
departRoutes.get("/allproducts/homeappliance", (req, res, next) => {
  Product.find({productType: "Home appliance"})
   
  .then((productsFromDb) => {
    console.log(productsFromDb);
    res.locals.productList = productsFromDb.productType
    res.render("depart/home-appliance");
  })
  .catch((err) => {
    next(err);
  })
});

// Home fourniture route
departRoutes.get("/allproducts/homefurniture", (req, res, next) => {
  Product.find({productType: "Home furnishing"})
   
  .then((productsFromDb) => {
    console.log(productsFromDb);
    res.locals.productList = productsFromDb
    
    res.render("depart/home-furniture");
  })
  .catch((err) => {
    next(err);
  })
});

module.exports = departRoutes;