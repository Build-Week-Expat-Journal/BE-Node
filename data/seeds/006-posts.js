exports.seed = function(knex, Promise) {
  return knex('posts').insert([
    {
      title: 'Visiting Italy was amazing',
      contents: 'I love this country!',
      user_id: 1
    },
    {
      title: 'Staying in Mexico',
      contents: 'Such a wonderful time',
      user_id: 1
    },
    {
      title: 'Staying in Africa',
      contents: 'This place left me speechless',
      user_id: 2
    }
  ]);
};
