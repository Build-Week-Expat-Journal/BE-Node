const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserPosts,
  findInterests,
  remove
};

function find() {
  return db('users').select('id', 'username', 'email');
}

function findInterests() {
  return db('interests');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      console.log(ids);
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .select('id', 'email', 'username', 'password', 'confirm_password')
    .where({ id })
    .first();
}
function findUserPosts(userId) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'p.contents as story', 'u.username as said_by')
    .where({ user_id: userId });
}

function remove(id) {
  return db('users')
    .where('id', Number(id))
    .del();
  return findById(id);
}
