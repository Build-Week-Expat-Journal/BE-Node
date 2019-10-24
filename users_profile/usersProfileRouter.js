const express = require('express');

const router = express.Router();

const authMiddleware = require('../auth-middleware/authMiddleWare.js');
const getUserProfile = require('../users_profile/usersProfile_db_helpers.js');

router.get('/', authMiddleware, (req, res) => {
  getUserProfile
    .find()
    .then(userProfile => {
      res.status(200).json(userProfile);
    })
    .catch(err => {
      res.status(500).json({
        message:
          'There was a problem retrieving the user profile from the database'
      });
    });
});

module.exports = router;
