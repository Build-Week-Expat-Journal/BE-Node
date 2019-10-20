exports.up = function(knex) {
  //changes I want to make to my schema
  return knex.schema.createTable('user_messages', tbl => {
    tbl.increments();
    tbl.text('message', 4000);
    tbl.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));

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
  return knex.schema.dropTableIfExists('user_messages');
};
