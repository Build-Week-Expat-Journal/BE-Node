exports.seed = function(knex) {
  // Inserts seed entries
  return knex('user_profile').insert([
    {
      first_name: 'Marty',
      last_name: 'Smith',
      date_of_birth: '3/4/1992',
      occupation: ' React Developer',
      location: 'CA',
      bio: 'Some info about yourself...'
    },
    {
      first_name: 'Stacy',
      last_name: 'Williams',
      date_of_birth: '2/4/1992',
      occupation: 'UX Designer',
      location: 'GA',
      bio: 'Some info about yourself...'
    },
    {
      first_name: 'Karen',
      last_name: 'Slow',
      date_of_birth: '1/4/1992',
      occupation: 'UI Designer',
      location: 'NYC',
      bio: 'Some info about yourself...'
    }
  ]);
};
