const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  fullname:     { type: String, required: true},
  email:        { type: String, required: true},
  encryptedPassword: { type: String, required: true }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
userSchema.virtual("isSeller").get(function () {
  return this.sellerStatus === true;
});
const User = mongoose.model('User', userSchema);
module.exports = User;
