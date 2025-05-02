const Consumer = require('../../domain/entities/Consumer');
class ConsumerRepositoryImpl {
  createUser(data)       { return Consumer.create(data); }
  findUserByEmail(email) { return Consumer.findOne({ email }); }
}
module.exports = ConsumerRepositoryImpl;
