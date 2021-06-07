const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Camera = mongoose.model('Camera');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  address: String,
  city: String,
  cp: Number,
  phone: Number,
  password: String,
  favorites: [{ type: Schema.ObjectId, ref: "Camera" }],
  cart: [{ type: Schema.ObjectId, ref: "Camera" }],
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = mongoose.model('User', userSchema);
