const express = require("express");
const passport = require('passport');
const mapRoutes = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");

mapRoutes.get("/mapOverview", (req, res, next) => {
  res.render("map/map-overviews");
});

mapRoutes.get("/moverMap/data", (req, res, next) => {
    console.log(" get in:/moverMap/data")
    Product.find()
    .then((allMover) => {
      res.json(allMover);
    })
    .catch((err) => {
      next(err);
    });
});
module.exports = mapRoutes;
