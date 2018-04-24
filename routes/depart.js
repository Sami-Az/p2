const express = require("express");
const passport = require('passport');
const departRoutes = express.Router();
const User = require("../models/User");
const Seller = require("../models/Seller");
const Product = require("../models/Product");


// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

departRoutes.get("/departments", (req, res, next) => {
  res.render("depart/departments-page");
});

departRoutes.get("/allproducts", (req, res, next) => {
  res.render("depart/allproducts");
});

module.exports = departRoutes;