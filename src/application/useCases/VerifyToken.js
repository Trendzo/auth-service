// src/application/useCases/VerifyToken.js
const jwt = require('jwt-simple');
const { jwtSecret } = require('../../config/appConfig');

class VerifyToken {
  execute({ token }) {
    try {
      const payload = jwt.decode(token, jwtSecret);
      if (Date.now() > payload.exp) throw new Error('Token expired');
      return payload;
    } catch (err) {
      throw new Error('Invalid token');
    }
  }
}

module.exports = VerifyToken;
