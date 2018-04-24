const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
  department:   { type: Array, enum: ["Electronics", "Home appliance", "Home furnishing"]},
  productType:  { type: Array, enum:["Television", "Phone", "Washing","Cold", "Furniture", "Bed room"]},
  productName:  { type: String, required: true},
  brand:        { type: String, required: true},
  model:        { type: String, required: true},
  price:        { type: Number, required: true},
  description:  { type: String, required: true},
  Status:       { type: String, enum: ["available", "sold"], required: true},
  imageUrl:     { type: String, required: true},
  pdflink:      { type: String, required: true},
  sellerId:{
          type: Schema.Types.ObjectId,
          ref: "Seller",
          required: true
        }  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;