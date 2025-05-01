// src/interfaceAdapters/controllers/AuthController.js
const express      = require('express');
const RegisterUser = require('../../application/useCases/RegisterUser');
const LoginUser    = require('../../application/useCases/LoginUser');
const VerifyToken  = require('../../application/useCases/VerifyToken');
const LogoutUser   = require('../../application/useCases/LogoutUser');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const uc = new RegisterUser();
    const user = await uc.execute(req.body);
    res.status(201).json({ id: user._id, email: user.email, role: user.role });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const uc = new LoginUser();
    const token = await uc.execute(req.body);
    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
});

router.post('/verify', (req, res) => {
  try {
    const { token } = req.body;
    const uc = new VerifyToken();
    const payload = uc.execute({ token });
    res.json({ valid: true, payload });
  } catch (e) {
    res.status(401).json({ valid: false, error: e.message });
  }
});

router.post('/logout', async (req, res) => {
  // optional:
  res.json({ success: true });
});

module.exports = router;
