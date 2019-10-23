const express = require('express');

const router = express.Router();
const authMiddleware = require('../auth-middleware/authMiddleWare.js');
const getMessages = require('../messages/message_db_helpers.js');

router.get('/', authMiddleware, (req, res) => {
  getMessages.find().then(message => {
    res.status(200).json(message);
  });
});

module.exports = router;
