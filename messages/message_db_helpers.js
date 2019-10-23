const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db('created_messages');
}

function findById(id) {
  return db('created_messages')
    .select('id', 'message:')
    .where({ id })
    .first();
}

function add(message) {
  return db('created_messages')
    .insert(message, 'id')
    .then(ids => {
      console.log(ids);
      const [id] = ids;
      return findById(id);
    });
}
