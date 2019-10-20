exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_posts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('user_posts').insert([
        {
          user_id: 1,
          posts: 'I really enjoyed living in South Africa',
          story: 'Some exciting story here..'
        },
        {
          user_id: 2,
          posts: 'I really enjoyed living in Rome',
          story: 'some exciting story here..'
        },
        {
          user_id: 3,
          posts: 'I really enjoyed living in Mexico',
          story: 'some exciting story here...'
        }
      ]);
    });
};
