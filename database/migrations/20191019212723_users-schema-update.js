exports.up = function(knex) {
  //changes I want to make to my schema
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('username', 255).notNullable();
      tbl
        .string('email', 255)
        .unique()
        .notNullable();
      tbl.string('password', 255).notNullable();
      tbl.string('confirm password', 255).notNullable();
    })
    .createTable('interests', tbl => {
      tbl.increments();
      tbl.string('photography', 255);
      tbl.string('networking', 255);
      tbl.string('yoga', 255);
      tbl.string('hiking', 255);
      tbl.string('chess', 255);
    })
    .createTable('user_interests', tbl => {
      //create a FK that references the PK on the users table
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .reference('id')
        .table('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl
        .integer('interest_id')
        .unsigned()
        .notNullable()
        .reference('id')
        .table('interests')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
