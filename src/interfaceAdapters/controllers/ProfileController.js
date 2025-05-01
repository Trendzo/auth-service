// src/interfaceAdapters/controllers/ProfileController.js
const express = require('express');
const router  = express.Router();

// GET /profile → returns the authenticated user’s info
router.get('/', (req, res) => {
  res.json({
    message: 'This is a protected route!',
    user: req.user
  });
});

module.exports = router;
