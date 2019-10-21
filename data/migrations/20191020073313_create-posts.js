exports.up = function(knex) {
  return knex.schema.createTable('user_posts', function(posts) {
    posts.increments();

    posts.string('title', 1024).notNullable();
    posts.text('contents', 4000).notNullable();

    posts.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_posts');
};
