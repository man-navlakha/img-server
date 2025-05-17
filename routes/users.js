// routes/users.js
const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
  
    // Mock data
    const users = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ];
  
    // Find user by ID
    const user = users.find(u => u.id === userId);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

// POST /api/users
router.post('/', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});

module.exports = router;
