exports.up = function(knex) {
  return knex.schema
    .createTable('created_messages', message => {
      message.increments();
      message.text('message', 4000);
      message.timestamps(true, true);
    })
    .createTable('user_message', user_messages => {
      user_messages.increments();

      //create a FK that references users table and messages table
      user_messages
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      //create a FK that references create_messages table
      user_messages
        .integer('message_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('created_messages')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      user_messages.unique(['user_id', 'message_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_message')
    .dropTableIfExists('created_messages');
};
