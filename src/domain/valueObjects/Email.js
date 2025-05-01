// src/domain/valueObjects/Email.js
class Email {
    constructor(value) {
      if (!Email.isValid(value)) {
        throw new Error('Invalid email format');
      }
      this.value = value;
    }
  
    static isValid(email) {
      const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return re.test(email);
    }
  }
  
  module.exports = Email;
  