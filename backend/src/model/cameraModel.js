const mongoose = require('mongoose');

const cameraSchema = mongoose.Schema({
  cameraModel: String,
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
  section: String,
  sold: Boolean,
});

module.exports = mongoose.model('Camera', cameraSchema);
