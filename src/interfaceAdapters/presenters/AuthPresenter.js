// src/interfaceAdapters/presenters/AuthPresenter.js
// (optional) transform domain objects → HTTP responses
class AuthPresenter {
      static register(user, role) {
        return { id: user._id, email: user.email, role };
      }
    static login(token) {
      return { token };
    }
  }
  
  module.exports = AuthPresenter;
  