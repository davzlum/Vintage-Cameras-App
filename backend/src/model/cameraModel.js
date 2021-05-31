const mongoose = require('mongoose');

const cameraSchema = mongoose.Schema({
  model: String,
  year: String,
  arsenalFactory: String,
  specifications: {
    lens: String,
    mount: String,
    focus: String,
    aperture: String,
    speed: String,
    weight: String,
    film: String,
  },
  history: String,
  price: Number,
  images: [String],
});

module.exports = mongoose.model('Camera', cameraSchema);
