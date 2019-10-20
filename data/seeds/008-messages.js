exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('created_messages')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('created_messages').insert([
        { message: 'Is anyone going to Bali soon?' },
        { message: 'There are some great hiking trails in India' },
        { message: 'Guess what I will be back in California in 3 days!' }
      ]);
    });
};
