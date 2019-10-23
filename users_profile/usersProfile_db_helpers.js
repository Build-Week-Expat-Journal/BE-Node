const db = require('../data/dbConfig');

module.exports = {
  find
};

function find() {
  return db('user_profile');
}
