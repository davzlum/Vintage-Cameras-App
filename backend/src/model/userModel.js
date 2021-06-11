const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Camera = mongoose.model('Camera');
const Film = mongoose.model('Film');
const Lens = mongoose.model('Lens');
const md5 = require('md5');


const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  address: String,
  city: String,
  cp: Number,
  phone: Number,
  password: String,
  favorites: {
    cameras: [{type: Schema.ObjectId, ref: 'Camera' }],
    lenses: [{type: Schema.ObjectId, ref: 'Lens' }],
    films: [{type: Schema.ObjectId, ref: 'Film' }],
  },
  cart: {
    cameras: [{type: Schema.ObjectId, ref: 'Camera' }],
    lenses: [{type: Schema.ObjectId, ref: 'Lens' }],
    films: [{type: Schema.ObjectId, ref: 'Film' }],
  },
  
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  // return password === this.password;
  return md5(password) === this.password;
};

module.exports = mongoose.model('User', userSchema);
