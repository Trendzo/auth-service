// src/application/useCases/LoginUser.js
const jwt      = require('jwt-simple');
const Password = require('../../domain/valueObjects/Password');
const UserRepo = require('../../interfaceAdapters/gateways/UserRepositoryImpl');
const { jwtSecret, jwtExpiration } = require('../../config/appConfig');

class LoginUser {
  constructor() {
    this.repo = new UserRepo();
  }

  async execute({ email, password }) {
    const user = await this.repo.findUserByEmail(email);
    if (!user) throw new Error('User not found');

    const valid = await Password.compare(password, user.password);
    if (!valid) throw new Error('Invalid credentials');

    const payload = {
      sub:  user._id.toString(),
      role: user.role,
      iat:  Date.now(),
      exp:  Date.now() + parseDuration(jwtExpiration),
    };

    const token = jwt.encode(payload, jwtSecret);
    return token;
  }
}

// helper to convert "1h","30m" → ms
function parseDuration(str) {
  const num = parseInt(str, 10);
  if (str.endsWith('h')) return num * 3600 * 1000;
  if (str.endsWith('m')) return num * 60 * 1000;
  return num;
}

module.exports = LoginUser;
