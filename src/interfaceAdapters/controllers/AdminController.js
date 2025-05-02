// AdminController.js
const router = require('express').Router();
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Admin dashboard', user: req.user });
});
module.exports = router;
