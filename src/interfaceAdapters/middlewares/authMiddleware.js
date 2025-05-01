// src/interfaceAdapters/middlewares/authMiddleware.js
const jwt         = require('jwt-simple');
const { jwtSecret } = require('../../config/appConfig');

module.exports = function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header' });
  }

  const token = header.split(' ')[1];
  try {
    const payload = jwt.decode(token, jwtSecret);
    // check expiration (payload.exp was set in LoginUser use case as a timestamp in ms)
    if (Date.now() > payload.exp) {
      return res.status(401).json({ error: 'Token expired' });
    }
    // attach the user info for downstream handlers
    req.user = { id: payload.sub, role: payload.role };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
