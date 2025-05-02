const Email    = require('../../domain/valueObjects/Email');
const Password = require('../../domain/valueObjects/Password');

class RegisterUser {
  constructor(repo) {
    this.repo = repo;
  }

  async execute({ email, password }) {
    const emailVO = new Email(email);
    const pwHash  = await Password.hash(password);
    return this.repo.createUser({
      email:    emailVO.value,
      password: pwHash
    });
  }
}

module.exports = RegisterUser;
