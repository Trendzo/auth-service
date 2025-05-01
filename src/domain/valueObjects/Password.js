// src/domain/valueObjects/Password.js
const bcrypt = require('bcryptjs');

class Password {
  constructor(value) {
    if (!Password.isValid(value)) {
      throw new Error('Password must be at least 6 characters');
    }
    this.value = value;
  }

  static isValid(pw) {
    return typeof pw === 'string' && pw.length >= 6;
  }

  static async hash(pw) {
    return bcrypt.hash(pw, 10);
  }

  static async compare(plain, hash) {
    return bcrypt.compare(plain, hash);
  }
}

module.exports = Password;
