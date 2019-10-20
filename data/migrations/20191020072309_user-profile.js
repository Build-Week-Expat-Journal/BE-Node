exports.up = function(knex) {
  return knex.schema.createTable('user_profile', tbl => {
    tbl.increments();
    tbl.string('first_name', 255).notNullable();
    tbl.string('last_name', 255).notNullable();
    tbl.date('date_of_birth').notNullable();
    tbl.string('occupation', 255).notNullable();
    tbl.string('location', 255).notNullable();
    tbl.text('bio', 4000).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_profile');
};
