const express = require('express');

const router = express.Router();
const authMiddleware = require('../auth-middleware/authMiddleWare');

const getInterests = require('./interests_db_helpers.js');

router.get('/', authMiddleware, (req, res) => {
  getInterests.findInterests().then(userInterests => {
    res.status(200).json(userInterests);
  });
});

module.exports = router;
