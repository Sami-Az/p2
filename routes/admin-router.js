const express = require ("express");

const adminRoutes = express.Router();

const User = require("../models/User");


adminRoutes.get("/admin/users", (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    // if you aren't logged in OR you are NOT an admin
    // go straight to the 404 page ( sneaky ! ;))
    next();
    return;
  }
  
  User.find()
    .then((userFromDb) => {
       res.locals.userList = userFromDb;
       res.render("admin-views/user-list-page");
    })
    .catch((err) => {
       next(err);
    });
});

module.exports = adminRoutes;