const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Log-in 
router.get ('/login', (req, res, next) => {
  res.render('auth/login-page');
});


// Sign-up
router.get ('/signup', (req, res, next) => {
  res.render('auth/signup-page');
});

// About us
router.get ('/about', (req, res, next) => {
  res.render('about-page');
});

// Contact us
router.get ('/contact', (req, res, next) => {
  res.render('contact-page');
});


module.exports = router;
