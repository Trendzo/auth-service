const jwt      = require('jwt-simple');
const Password = require('../../domain/valueObjects/Password');
const { jwtSecret, jwtExpiration } = require('../../config/appConfig');

function parseDuration(str) {
  const n = parseInt(str,10);
  if (str.endsWith('h')) return n * 3600*1000;
  if (str.endsWith('m')) return n * 60*1000;
  return n;
}

class LoginUser {
  constructor(repo) {
    this.repo = repo;
  }

  async execute({ email, password, role }) {
    const user = await this.repo.findUserByEmail(email);
    if (!user) throw new Error('User not found');
    if (!await Password.compare(password, user.password)) {
      throw new Error('Invalid credentials');
    }

    const now = Date.now();
    const payload = {
      sub:  user._id.toString(),
      role,
      iat:  now,
      exp:  now + parseDuration(jwtExpiration),
    };

    return jwt.encode(payload, jwtSecret);
  }
}

module.exports = LoginUser;
