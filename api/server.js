const express = require('express');
const server = express();
const postRoutes = require('../posts/postRouter.js'); //imports routes
const usersRoutes = require('../users/userRouter.js'); //imports routes

server.use(express.json());
server.use('/api/posts', postRoutes);
server.use('/api/users', usersRoutes);

server.get('/', (req, res) => {
  res.send(
    `<h3>https://expat-journal-lambda1.herokuapp.com/</h3>, <h3>
    https://expat-journal-lambda1.herokuapp.com/api/users</h3>`
  );
});

module.exports = server;
