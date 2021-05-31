const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  address: String,
  city: String,
  cp: Number,
  phone: Number,
  password: String,
  favorites: [String],

});

module.exports = mongoose.model('User', userSchema);
