exports.up = function(knex) {
  //changes I want to make to my schema
  return knex.schema.createTable('user_profile', tbl => {
    tbl.increments();
    tbl.string('first_name', 255).notNullable();
    tbl.string('last_name', 255).notNullable();
    tbl.date('date').notNullable();
    tbl.string('occupation', 255);
    tbl.string('location');
    tbl.text('bio', 4000);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_profile');
};
