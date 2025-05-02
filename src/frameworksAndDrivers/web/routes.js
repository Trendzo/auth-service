// src/frameworksAndDrivers/web/routes.js
const userAuth        = require('../../interfaceAdapters/controllers/UserAuthController');
const adminAuth       = require('../../interfaceAdapters/controllers/AdminAuthController');
const storeAuth       = require('../../interfaceAdapters/controllers/StoreAuthController');

const userController  = require('../../interfaceAdapters/controllers/UserController');
const adminController = require('../../interfaceAdapters/controllers/AdminController');
const storeController = require('../../interfaceAdapters/controllers/StoreController');

const authMiddleware  = require('../../interfaceAdapters/middlewares/authMiddleware');
const authorizeRoles  = require('../../interfaceAdapters/middlewares/authorizeRoles');

module.exports = (app) => {
  // === Public, role-specific auth endpoints (no token required) ===
  app.use('/user/auth',  userAuth);
  app.use('/admin/auth', adminAuth);
  app.use('/store/auth', storeAuth);

  // === Protected, role-based APIs ===
  app.use(
    '/user',
    authMiddleware,
    authorizeRoles('user'),
    userController
  );

  app.use(
    '/admin',
    authMiddleware,
    authorizeRoles('admin'),
    adminController
  );

  app.use(
    '/store',
    authMiddleware,
    authorizeRoles('store'),
    storeController
  );
};
