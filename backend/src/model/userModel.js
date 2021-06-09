const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Camera = mongoose.model('Camera');
const Film = mongoose.model('Film');
const Lens = mongoose.model('Lens');


const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  address: String,
  city: String,
  cp: Number,
  phone: Number,
  password: String,
  favorites: [{type: Schema.ObjectId, ref: 'Camera' }],
  // onModel: {
  //   type: String,
  //   required: true,
  //   enum: ['Camera', 'Film', 'Lens']
  // },
  cart: [{ type: Schema.ObjectId, ref: 'Camera' }],
  
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return md5(password) === this.password;
};

module.exports = mongoose.model('User', userSchema);
