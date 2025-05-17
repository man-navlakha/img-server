// index.js
const express = require('express');
const app = express();
const PORT = 3000;


require('dotenv').config();

// Import routes
const userRoutes = require('./routes/users');
const animalRoutes = require('./routes/animal');


// Middleware
app.use(express.json());

// Use the users route with a base path

app.use('/api/animal', animalRoutes);
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
