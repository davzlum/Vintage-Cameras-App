const mongoose = require('mongoose');

const lensSchema = mongoose.Schema({
  lensModel: String,
  year: String,
  arsenalFactory: String,
  specifications: {
    lens: String,
    mount: String,
    focus: String,
    aperture: String,
    weight: String,
  },
  history: String,
  price: Number,
  images: [String],
});

module.exports = mongoose.model('Lens', lensSchema);