const express = require("express");
const passport = require('passport');
const dailyRoutes = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");



dailyRoutes.get("/daily", (req, res, next) => {
  res.render("daily/daily-page");
});


// dailyRoutes.get("/products", (req, res, next) => {
//   res.render("daily/products");
// });

// dailyRoutes.get("/products/:productId", (req, res, next) => {
//   Product.findById(req.params.productId)
//   .then((productDetails) =>  {
//     res.locals.product = productDetails;
//     res.render("daily/single-product-page");
//   })
//   .catch((err) => {
//    next(err);
//  });
// });
module.exports = dailyRoutes;