const Store = require('../../domain/entities/Store');
class StoreRepositoryImpl {
  createUser(data)       { return Store.create(data); }
  findUserByEmail(email) { return Store.findOne({ email }); }
}
module.exports = StoreRepositoryImpl;
