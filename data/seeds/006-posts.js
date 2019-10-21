exports.seed = function(knex, Promise) {
  return knex('posts').insert([
    {
      title: 'Visiting Italy was amazing',
      contents: 'I love this country!'
    },
    {
      title: 'Staying in Mexico',
      contents: 'Such a wonderful time'
    },
    {
      title: 'Staying in Africa',
      contents: 'This place left me speechless'
    }
  ]);
};
