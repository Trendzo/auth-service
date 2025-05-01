// src/application/useCases/LogoutUser.js
// (optional—for real JWT blacklisting you'd persist a token list)
class LogoutUser {
    async execute({ token }) {
      // e.g. add token to a blacklist store
      return true;
    }
  }
  
  module.exports = LogoutUser;
  