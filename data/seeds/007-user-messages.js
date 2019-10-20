exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_message')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_message').insert([
        { user_id: 1, message_id: 1 },
        { user_id: 2, message_id: 1 },
        { user_id: 3, message_id: 3 }
      ]);
    });
};
