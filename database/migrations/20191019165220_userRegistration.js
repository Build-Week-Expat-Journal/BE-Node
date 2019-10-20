exports.up = function(knex) {
  //changes I want to make to my schema
  return knex.schema.createTable('user_registration', tbl => {
    tbl.increments();
    tbl
      .string('email', 255)
      .unique()
      .notNullable();
    tbl
      .string('username', 255)
      .unique()
      .notNullable();
    tbl.string('password', 255).notNullable();
    tbl.string('confirm password', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_registration');
};
