exports.up = function(knex) {
  return knex.schema.createTable('user_posts', posts => {
    posts.increments();
    posts.string('posts', 255);
    posts.text('story', 4000);
    posts.timestamps(true, true);

    // create a FK that references the users table
    posts
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_posts');
};
