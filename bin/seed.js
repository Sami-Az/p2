// const mongoose = require("mongoose");

// const Product = require ("../models/Product.js");


// mongoose.Promise = Promise;
// mongoose
//   .connect('mongodb://localhost/p2', {useMongoClient: true})
//   .then(() => {
//     console.log('Connected to Mongo!')
//   }).catch(err => {
//     console.error('Error connecting to mongo', err)
//   });


//   const products = [
//     {
//       department: "Electronics",
//       productType: "Television",
//       productName : "Full HD TV",
//       brand: "Samsung",
//       model: "abc",
//       price: "499€",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       Status:"Available",
//       imageUrl: "http://images.samsung.com/is/image/samsung/my-full-hd-k6300-ua49k6300akxxm-001-front-black?$PD_GALLERY_L_JPG$",
//       pdflink: "",
//       sellerId: "5ad6137d08f7bc4062a5984e",
//       department:  "Home appliance",
//       productType: "Fridge",
//       productName :"Full option Fridge",
//       brand: "LG",
//       model: "def",
//       price: "399€",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       Status:"Available",
//       imageUrl: "https://brain-images-ssl.cdn.dixons.com/1/0/10160101/u_10160101.jpg",
//       pdflink: "",
//       sellerId: {
//                   type: Schema.Types.ObjectId,
//                   ref: "Seller",
//                   required: true
//                 },
//       department:  "Home furnishing",
//       productType: "Bed",
//       productName :"King size",
//       brand: "IKEA",
//       model: "ghi",
//       price: "299€",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//       Status:"Available",
//       imageUrl: "https://www.ikea.com/gb/en/images/products/malm-bed-frame-high-w-2-storage-boxes-oak-veneer-lur%C3%B6y__0240109_pe379791_s5.jpg",
//       pdflink: "",
//       sellerId: {
//                   type: Schema.Types.ObjectId,
//                   ref: "Seller",
//                   required: true
//                 },
//       }, {
//         timestamps: {
//           createdAt: 'created_at',
//           updatedAt: 'updated_at'
//         }
//       } 
//     ]
      