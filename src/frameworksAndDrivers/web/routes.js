// src/frameworksAndDrivers/web/routes.js
const authRouter     = require('../../interfaceAdapters/controllers/AuthController');
const profileRouter  = require('../../interfaceAdapters/controllers/ProfileController');
const authMiddleware = require('../../interfaceAdapters/middlewares/authMiddleware');
// If you want role-based, uncomment next line:
// const authorizeRoles = require('../../interfaceAdapters/middlewares/authorizeRoles');

module.exports = (app) => {
  app.use('/auth', authRouter);

  // all /profile calls must pass authMiddleware
  app.use('/profile',
    authMiddleware,
    // authorizeRoles('admin','user','store'),  // <-- if you need role checks
    profileRouter
  );
};