const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const jobRoutes = require('./routes/jobRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', jobRoutes);
app.use('/api', testimonialRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));