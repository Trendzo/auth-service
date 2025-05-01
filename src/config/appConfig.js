// src/config/appConfig.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiration: process.env.JWT_EXPIRATION,
};
