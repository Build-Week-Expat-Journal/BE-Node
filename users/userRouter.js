const express = require('express');

const router = express.Router();

const Users = require('./user_db_helpers.js');

router.get('/', (req, res) => {
  res.send('welcome User');
});

module.exports = router;
