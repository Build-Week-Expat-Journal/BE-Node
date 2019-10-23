const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../config_secret/secrets.js');
const router = express.Router();
const authMiddleware = require('../auth-middleware/authMiddleWare');
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

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({
        message: 'There was a problem finding that user id inside the database'
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

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  console.log(user);
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(savedUser => {
      //jwt should be generated
      const token = generateToken(savedUser);
      console.log(savedUser);
      res.status(201).json({
        user: savedUser,
        token
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'cannot add the user', ...error });
    });
});

router.post('/login', (req, res) => {
  // implement login
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce token
        const token = generateToken(user);

        // add token to response
        res.status(201).json({
          message: `Welcome ${user.username}!`,
          token
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
  const deleteId = req.params.id;

  Users.remove(deleteId)
    .then(user => {
      res.status(204).json(user);
    })
    .catch(err => {
      res.status(500).json({
        message: 'There was a problem removing the user from the database'
      });
    });
});

function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id
  };
  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
