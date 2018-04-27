const express = require('express');
const router  = express.Router();
const Product = require('../models/Product')

/* GET home page */
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-') + " "+['00','00','00'].join(':');
}

router.get('/', (req, res, next) => {

  var now = formatDate(new Date().setHours(0,0,0));
  console.log("now:"+now);
 /* var isDateNotEmpty = true;  
  while (isDateNotEmpty){*/
    Product.find({created_at:  {$gt: now}, productType: "Home appliance"})
    .then( data => {
     // console.log("data.length --> "+data.length)  
      if (data.length >0){
        res.render('index', {product: data}); 
     /*   isDateNotEmpty = false;  
        console.log("isDateNotEmpty --> "+isDateNotEmpty)    */
      }
     /* else {
        let i = -24;       
        now = formatDate(new Date().setHours(i,0,0));
        i -= 24;
      }
      console.log("hors isDateNotEmpty --> "+isDateNotEmpty)   */
    })
    .catch(err => {
        next(err);
    }) 
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
