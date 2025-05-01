// src/interfaceAdapters/gateways/UserRepositoryImpl.js
const User = require('../../domain/entities/User');
const IUserRepo = require('../../domain/repositories/IUserRepository');

class UserRepositoryImpl extends IUserRepo {
  async createUser(data) {
    return User.create(data);
  }

  async findUserByEmail(email) {
    return User.findOne({ email });
  }
}

module.exports = UserRepositoryImpl;
