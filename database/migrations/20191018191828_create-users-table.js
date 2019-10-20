exports.up = function(knex) {
  //changes I want to make to my schema
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('email', 128)
      .unique()
      .notNullable();
    tbl.string('password', 255).notNullable();
  });
};

exports.down = function(knex) {
  //undoing that change
  return knex.schema.dropTableIfExists('users');
};
