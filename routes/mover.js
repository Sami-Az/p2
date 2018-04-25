const express = require("express");
const passport = require('passport');
const moverRoutes = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

moverRoutes.get("/mover", (req, res, next) => {
  res.render("mover/mover-home");
});

moverRoutes.get("/mover/moveraddItem", (req, res, next) => {
  res.render("mover/mover-addItem");
})

moverRoutes.post("/add-item", (req,res,next) => {
 // console.log( req)
 // res.send(req)
  const {department, productType, productName, brand,model,description, status, imageUrl, pdflink} = req.body;

  Product.create({department, productType, productName, brand,model,description, status, imageUrl, pdflink, userId: req.user._id})
    .then(() => {
       // res.flash("success", "room created");
        res.redirect('/mover');        
    })
    .catch(err => {
      next(err);
    });

});


module.exports = moverRoutes;
