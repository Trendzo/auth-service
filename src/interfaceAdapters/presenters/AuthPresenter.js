// src/interfaceAdapters/presenters/AuthPresenter.js
// (optional) transform domain objects → HTTP responses
class AuthPresenter {
    static register(user) {
      return { id: user._id, email: user.email, role: user.role };
    }
    static login(token) {
      return { token };
    }
  }
  
  module.exports = AuthPresenter;
  