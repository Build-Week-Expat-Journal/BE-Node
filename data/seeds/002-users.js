exports.seed = function(knex) {
  //inserts seed entries
  return knex('users').insert([
    {
      email: 'user1@email.com',
      username: 'user1',
      password: 'pass1',
      confirm_password: 'pass1'
    },
    {
      email: 'user2@email.com',
      username: 'user2',
      password: 'pass2',
      confirm_password: 'pass2'
    },
    {
      email: 'user3@email.com',
      username: 'user3',
      password: 'pass3',
      confirm_password: 'pass3'
    }
  ]);
};
