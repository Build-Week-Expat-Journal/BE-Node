const express = require('express');

const router = express.Router();

const getInterests = require('./interests_db_helpers.js');

router.get('/', (req, res) => {
  getInterests.findInterests().then(userInterests => {
    res.status(200).json(userInterests);
  });
});

module.exports = router;
