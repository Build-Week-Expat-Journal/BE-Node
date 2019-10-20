exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('interests')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('interests').insert([
        {
          photography: 'yes',
          networking: 'no',
          yoga: 'yes',
          hiking: 'yes',
          chess: 'yes'
        },
        {
          photography: 'no',
          networking: 'yes',
          yoga: 'yes',
          hiking: 'yes',
          chess: 'no'
        },
        {
          photography: 'no',
          networking: 'no',
          yoga: 'no',
          hiking: 'yes',
          chess: 'no'
        }
      ]);
    });
};
