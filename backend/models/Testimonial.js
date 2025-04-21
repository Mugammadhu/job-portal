const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: String,
  text: String,
});

module.exports = mongoose.model('Testimonial', testimonialSchema);