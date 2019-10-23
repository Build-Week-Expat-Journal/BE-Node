const db = require('../data/dbConfig.js');

module.exports = {
  findInterests
};

function findInterests() {
  return db('interests');
}
