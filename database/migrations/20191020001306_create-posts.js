exports.up = function(knex) {
  //changes I want to make to my schema
  return knex.schema.createTable('user_posts', tbl => {
    tbl.increments();
    tbl.string('post', 255);
    tbl.text('story', 4000);

    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .reference('id')
      .table('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_posts');
};
