const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

//Middleware
app.use(cors());
app.use(express.json()); // Important to parse JSON request bodies

//Request Logger Middleware
app.use((req, res, next) => {
  console.log(` [${req.method}] ${req.url}`);
  next();
});

// Import routes
const authRoutes = require('./routes/auth');

// Route Middleware
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' Connected to MongoDB');

    // Start server after DB connects
    app.listen(process.env.PORT || 5000, () => {
      console.log(` Server running on http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
  });
