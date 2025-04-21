const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

router.get('/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;