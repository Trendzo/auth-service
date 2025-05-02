// StoreController.js
const router = require('express').Router();
router.get('/inventory', (req, res) => {
  res.json({ message: 'Store inventory', user: req.user });
});
module.exports = router;