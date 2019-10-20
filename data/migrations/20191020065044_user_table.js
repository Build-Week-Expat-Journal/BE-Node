exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl.string('email', 255).notNullable();
      tbl
        .string('username', 255)
        .unique()
        .notNullable();
      tbl.string('password', 255).notNullable();
      tbl.string('confirmed_password', 255).notNullable();
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
      tbl.increments();
      //create FK that references the PK in the users table
      tbl
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      tbl
        .integer('interest_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('interests')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_interests')
    .dropTableIfExists('interests')
    .dropTableIfExists('users');
};
