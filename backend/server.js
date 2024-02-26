// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/User', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api', authRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
