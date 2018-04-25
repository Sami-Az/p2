const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  fullname:     { type: String, required: true},
  email:        { type: String, required: true},
  adress: { streetNum: {type: Number, required: true},          
            streetName: {type: String, required: true},   
            city: {type: String, required: true},
            zipCode: {type: String, required: true}            
          },
  phoneNumber: {type: String, required: true},
  encryptedPassword: { type: String, required: true }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
