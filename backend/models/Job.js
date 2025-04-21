const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  minSalary: { type: Number, required: true },
  maxSalary: { type: Number, required: true },
  experienceMin: { type: Number, required: true },
  experienceMax: { type: Number, required: true },
  jobType: { type: String, required: true },
  workMode: { type: String, required: true },
  deadline: { type: Date, required: true },
  description: { type: String, required: true },
  image: { type: Buffer }, // Store image as binary data
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);