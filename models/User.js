const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  fullname:     { type: String, required: true},
  email:        { type: String, required: true},
  phoneNumber:  { type: String, required: true, minlength:10, maxlength:10}, 
  encryptedPassword: { type: String, required: true },
  role: {
          type: String,
          enum: ["mover", "admin"],
          default: "mover"
         }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});
userSchema.virtual("isAdmin").get( function () {
  return this.role === "admin";
});

const User = mongoose.model('User', userSchema);

module.exports = User;
