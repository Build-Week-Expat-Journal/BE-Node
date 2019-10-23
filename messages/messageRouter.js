const express = require('express');

const router = express.Router();
const authMiddleware = require('../auth-middleware/authMiddleWare.js');
const getMessages = require('../messages/message_db_helpers.js');

router.get('/', authMiddleware, (req, res) => {
  getMessages
    .find()
    .then(message => {
      res.status(200).json(message);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: 'There was a problem retrieving messages from the database'
        });
    });
});

module.exports = router;
