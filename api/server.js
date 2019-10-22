const express = require('express');
const server = express();
const postRoutes = require('../posts/postRouter.js'); //imports routes
const usersRoutes = require('../users/userRouter.js'); //imports routes

server.use(express.json());
server.use('/api/posts', postRoutes);
server.use('/api/users', usersRoutes);

server.get('/', (req, res) => {
  res.send(
    `<h3>https://expat-journal-lambda1.herokuapp.com/</h3>,

    -------
    grabs all the users
    GET:
     <h4>
    https://expat-journal-lambda1.herokuapp.com/api/users</h4>

    -------
    grabs user interests
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/interests</h4>

    -------
    grabs all posts created
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts</h4>

    -------
    grabs all the posts created by a user with the id of that user
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/users/:id/posts</h4>

    -------

    grabs a specific post by id
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</h4>

    -------
    grabs all comments posted by a specific user with there id
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id/comments</h4>

    -------

    This adds a post to the database for the user_id you specify
    POST:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts</h4>

    -------

    This adds a comment posted by a specific user with there id
    POST:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id/comments</h4>

    -------
    This updates a post for a user using the specific user_id
    PUT:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</h4>

    -------
    This deletes a post for a user, using the specific id
    DELETE:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</h4>

    `
  );
});

module.exports = server;
