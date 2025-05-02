const Admin = require('../../domain/entities/Admin');
class AdminRepositoryImpl {
  createUser(data)       { return Admin.create(data); }
  findUserByEmail(email) { return Admin.findOne({ email }); }
}
module.exports = AdminRepositoryImpl;
