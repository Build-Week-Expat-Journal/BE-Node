const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const postRoutes = require('../posts/postRouter.js'); //imports routes
const usersRoutes = require('../users/userRouter.js'); //imports routes

const interestsRouter = require('../interests/interestsRouter.js');

const messageRouter = require('../messages/messageRouter.js');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/posts', postRoutes);
server.use('/api/users', usersRoutes);
server.use('/api/interests', interestsRouter);
server.use('/api/messages', messageRouter);

server.get('/', (req, res) => {
  res.send(
    `<h3>https://expat-journal-lambda1.herokuapp.com/</h3>

    -------
    grabs all the users<br/>
    GET:
     <h4>
    https://expat-journal-lambda1.herokuapp.com/api/users</h4>

    -------

    grabs one individual user by id<br/>
    GET:
    <h4>
    https://expat-journal-lambda1.herokuapp.com/api/users/:id</h4>

    -------

    Allows User to Register with Email, Username, Password and confirm_password<br/>
    POST:
    <h4>
    https://expat-journal-lambda1.herokuapp.com/api/users/register</h4>

    -------

    Allows User to Login with Email and password<br/>
    POST:
    <h4>
    https://expat-journal-lambda1.herokuapp.com/api/users/login</h4>

    -------

    grabs user interests<br/>
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/interests</h4>

    -------
    grabs all posts created<br/>
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts</h4>

    -------

    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/messages</h4>

    -------
    
    grabs all the posts created by a user with the id of that user<br/>
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/users/:id/posts</h4>

    -------

    grabs a specific post by id<br/>
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</h4>

    -------
    grabs all comments posted by a specific user with there id<br/>
    GET:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id/comments</h4>

    -------

    This adds a post to the database for the user_id you specify<br/>
    POST:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts</h4>

    -------

    This adds a comment posted by a specific user with there id<br/>
    POST:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id/comments</h4>

    -------
    This updates a post for a user using the specific user_id<br/>
    PUT:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</h4>

    -------
    This deletes a post for a user, using the specific id<br/>
    DELETE:
    <h4>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</h4>

    `
  );
});

module.exports = server;
