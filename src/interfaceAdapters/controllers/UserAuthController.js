// src/interfaceAdapters/controllers/UserAuthController.js
const express      = require('express');
const RegisterUser = require('../../application/useCases/RegisterUser');
const LoginUser    = require('../../application/useCases/LoginUser');
const LogoutUser   = require('../../application/useCases/LogoutUser');
const authMiddleware  = require('../../interfaceAdapters/middlewares/authMiddleware');
const authorizeRoles  = require('../../interfaceAdapters/middlewares/authorizeRoles');
const ConsumerRepo = require('../gateways/ConsumerRepositoryImpl');

const router = express.Router();

// POST /user/auth/register
router.post('/register', async (req, res) => {
  try {
    const uc   = new RegisterUser(new ConsumerRepo());
    const user = await uc.execute(req.body);
    res.status(201).json({ id: user._id, email: user.email });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// POST /user/auth/login
router.post('/login', async (req, res) => {
  try {
    const uc    = new LoginUser(new ConsumerRepo());
    const token = await uc.execute({ ...req.body, role: 'user' });
    res.json({ token });
  } catch (e) {
    res.status(401).json({ error: e.message });
  }
});



// POST /user/auth/logout (user only)
router.post(
      '/logout',
      authMiddleware,
      authorizeRoles('user'),
      async (req, res) => {
        try {
          const authHeader = req.headers.authorization || '';
          const token = authHeader.startsWith('Bearer ')
            ? authHeader.split(' ')[1]
            : null;
          if (!token) return res.status(400).json({ error: 'No token provided' });
          await new LogoutUser().execute({ token });
          res.json({ success: true });
        } catch (e) {
          res.status(400).json({ error: e.message });
        }
      }
    );

module.exports = router;
