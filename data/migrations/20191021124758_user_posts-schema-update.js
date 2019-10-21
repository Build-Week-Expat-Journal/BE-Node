exports.up = function(knex) {
  return knex.schema.createTable('posts', function(posts) {
    posts.increments();

    posts.string('title', 1024).notNullable();
    posts.text('contents', 4000).notNullable();

    posts.timestamps(true, true);

    posts
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts');
};
