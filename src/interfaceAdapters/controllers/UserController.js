// UserController.js
const router = require('express').Router();
router.get('/profile', (req, res) => {
  res.json({ id: req.user.id, role: req.user.role });
});
module.exports = router;
