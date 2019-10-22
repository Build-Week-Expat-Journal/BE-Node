const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  findUserPosts,
  findInterests
};

function find() {
  return db('users').select('id', 'username');
}

function findInterests() {
  return db('interests').select(
    'id',
    'photography',
    'networking',
    'yoga',
    'hiking',
    'chess'
  );
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}
function findUserPosts(userId) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'p.contents as story', 'u.username as said_by')
    .where({ user_id: userId });
}
