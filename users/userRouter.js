const express = require('express');

const router = express.Router();

const Users = require('./user_db_helpers.js');

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({ users });
    })
    .catch(err => {
      res.status(500).json({
        message: 'There was a problem getting the users from the database'
      });
    });
});

router.get('/:id/posts', (req, res) => {
  Users.findUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'error retrieving posts for the user', error });
      console.log(error);
    });
});

module.exports = router;
