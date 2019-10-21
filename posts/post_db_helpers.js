const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  findUserPosts,
  findPostComments,
  findCommentById,
  insertComment
};

function find() {
  return db('posts');
}

function findById(id) {
  return db('posts').where({ id: Number(id) });
}

function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db('posts')
    .where('id', Number(id))
    .update(post);
}

function remove(id) {
  return db('posts')
    .where('id', Number(id))
    .del();
}

function findUserPosts(userId) {
  return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .select('p.id', 'p.contents as story', 'u.username as said_by')
    .where({ user_id: userId });
}

function findPostComments(postId) {
  return db('comments')
    .join('posts', 'posts.id', 'post_id')
    .select('comments.*', 'title as post')
    .where('post_id', postId);
}

function findCommentById(id) {
  return db('comments')
    .join('posts', 'posts.id', 'post_id')
    .select('comments.*', 'title as post')
    .where('comments.id', id);
}

function insertComment(comment) {
  return db('comments')
    .insert(comment)
    .then(ids => ({ id: ids[0] }));
}
