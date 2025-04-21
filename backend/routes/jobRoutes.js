const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const multer = require('multer');

const upload = multer();

router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/jobs', upload.single('image'), async (req, res) => {
  const { title, company, location, minSalary, maxSalary, experienceMin, experienceMax, jobType, workMode, deadline, description } = req.body;
  let image = null;
  if (req.file) {
    image = req.file.buffer; // Convert uploaded file to binary buffer
  }

  const job = new Job({
    title,
    company,
    location,
    minSalary: parseFloat(minSalary),
    maxSalary: parseFloat(maxSalary),
    experienceMin: parseFloat(experienceMin),
    experienceMax: parseFloat(experienceMax),
    jobType,
    workMode,
    deadline: new Date(deadline),
    description,
    image,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;