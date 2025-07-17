// app.js

const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Example: If you have additional routes, import and use them here
// const userRoutes = require('./routes/user');
// app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
