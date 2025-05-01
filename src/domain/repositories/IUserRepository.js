// src/domain/repositories/IUserRepository.js
class IUserRepository {
    async createUser(user) {
      throw new Error('createUser() not implemented');
    }
    async findUserByEmail(email) {
      throw new Error('findUserByEmail() not implemented');
    }
  }
  
  module.exports = IUserRepository;
  