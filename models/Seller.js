const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const sellerSchema = new Schema({
  name:   { type:String, required: true},
  adress: {
            streetNo: { type:Number, required: true},
            street:   { type:String, required: true},
            city:     { type:String, required: true},
            zipCode:  { type:String, required: true}
          },
  userId: {
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

const Seller = mongoose.model('Seller', userSchema);
module.exports = Seller;