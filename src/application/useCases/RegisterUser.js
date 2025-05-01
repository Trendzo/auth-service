// src/application/useCases/RegisterUser.js
const Email    = require('../../domain/valueObjects/Email');
const Password = require('../../domain/valueObjects/Password');
const UserRepo = require('../../interfaceAdapters/gateways/UserRepositoryImpl');

class RegisterUser {
  constructor() {
    this.repo = new UserRepo();
  }

  async execute({ email, password, role }) {
    // validate & wrap
    const emailVO = new Email(email);
    const pwHash  = await Password.hash(password);

    const user = await this.repo.createUser({
      email:    emailVO.value,
      password: pwHash,
      role,
    });
    return user;
  }
}

module.exports = RegisterUser;
