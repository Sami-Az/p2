const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({

  department:   { type: String, enum: ["Electronics", "Home appliance", "Home furnishing"]},
  productType:  { type: String, enum:["Television", "Phone", "Washing machine", "Refrigerator", "Bed", "Table"]},
  
  productName:  { type: String, required: true},
  brand:        { type: String, required: true},
  model:        { type: String, required: true},  
  description:  { type: String, required: true},
  status:       { type: String, enum: ["available", "no more available"], required: true, default: "available"},
  imageUrl:     { type: String, required: true},
  pdflink:      { type: String, required: false},
  userId:{
          type: Schema.Types.ObjectId,
          ref: "User",
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