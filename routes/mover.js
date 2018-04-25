const express = require("express");
const passport = require('passport');
const moverRoutes = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

moverRoutes.get("/mover", (req, res, next) => {
  res.render("mover/mover-home");
});

moverRoutes.get("/mover/add", (req, res, next) => {
  res.render("mover/additem");
})

moverRoutes.post("/process-add", (req,res,next) => {
 // console.log( req)
 // res.send(req)
  const {department, productType, productName, brand,model ,description, status, imageUrl, pdflink} = req.body;

  Product.create({department, productType, productName, brand,model, description, status, imageUrl, pdflink, userId: req.user._id})

    .then(() => {
       // res.flash("success", "room created");
        res.redirect('/mover');        
    })
    .catch(err => {
      next(err);
    });

});


moverRoutes.get("/products/:productId/edit", (req, res, next) => {
  Product.findById(req.params.productId)
  .then((productDetails) => {
    res.locals.productId = req.params.productId;
    res.locals.product = productDetails;
    res.render("product/product-edit");
  })

  .catch((err) => {
      next(err);
  })
  
  
});

moverRoutes.post("/process-edit/:productId", (req, res, next) => {
  const {department, productType, productName, brand,model ,description, status, imageUrl, pdflink} = req.body;
  Product.findByIdAndUpdate(
    req.params.productId, //....... Which document to update
    {department, productType, productName, brand,model ,description, status, imageUrl, pdflink}, //........ What changes to make
    {runValidators: true} //............ Extra settings
  )
  .then (() => {
     res.redirect(`/products/${req.params.productId}`)   
  })
  .catch ((err) => {
     next(err);
  });
});

moverRoutes.get("/products/:productId", (req, res, next) => {
  Product.findById(req.params.productId)
  .then((productDetails) =>  {
    res.locals.product = productDetails;
    res.render("single-product-page");
  })
  .catch((err) => {
    //show the error page with this error
   next(err);
 });
});

moverRoutes.get("/products/:productId/delete", (req, res, next) => {
  Product.findByIdAndRemove(req.params.productId)
  .then (() => {
    res.redirect("/products");
  })
  .catch ((err) => {
     next(err);
  });
});


module.exports = moverRoutes;
