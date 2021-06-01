const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  filmModel: String,
  expired: Boolean,
  iso: Number,
  frames: Number,
  color: String,
  stock: Number,
  description: String,
  price: Number,
  images: [String],
  favState: Boolean,
});

module.exports = mongoose.model('Film', filmSchema);