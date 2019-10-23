const express = require('express');

const router = express.Router();

const getMessages = require('../messages/message_db_helpers.js');

router.get('/', (req, res) => {
  getMessages.find().then(message => {
    res.status(200).json(message);
  });
});

module.exports = router;
