# BackEnd-Node

`Heroku deployment site` # https://expat-journal-lambda1.herokuapp.com/

# End Points for Expat-Journal

`

    -------
    grabs all the users<br/>
    GET:
     <>
    https://expat-journal-lambda1.herokuapp.com/api/users</>

    -------

    grabs one individual user by id<br/>
    GET:
    <>
    https://expat-journal-lambda1.herokuapp.com/api/users/:id</>

    -------

    Allows User to Register with Email, Username, Password and confirm_password<br/>
    POST:
    <>
    https://expat-journal-lambda1.herokuapp.com/api/users/register</>

    -------

    Allows User to Login with Email and password<br/>
    POST:
    <>
    https://expat-journal-lambda1.herokuapp.com/api/users/login</>

    -------

    grabs user interests<br/>
    GET:
    <>https://expat-journal-lambda1.herokuapp.com/api/users/interests</>

    -------
    grabs all posts created<br/>
    GET:
    <>https://expat-journal-lambda1.herokuapp.com/api/posts</>

    -------
    grabs all the posts created by a user with the id of that user<br/>
    GET:
    <>https://expat-journal-lambda1.herokuapp.com/api/users/:id/posts</>

    -------

    grabs a specific post by id<br/>
    GET:
    <>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</>

    -------
    grabs all comments posted by a specific user with there id<br/>
    GET:
    <>https://expat-journal-lambda1.herokuapp.com/api/posts/:id/comments</>

    -------

    This adds a post to the database for the user_id you specify<br/>
    POST:
    <>https://expat-journal-lambda1.herokuapp.com/api/posts</>

    -------

    This adds a comment posted by a specific user with there id<br/>
    POST:
    <>https://expat-journal-lambda1.herokuapp.com/api/posts/:id/comments</>

    -------
    This updates a post for a user using the specific user_id<br/>
    PUT:
    <>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</>

    -------
    This deletes a post for a user, using the specific id<br/>
    DELETE:
    <>https://expat-journal-lambda1.herokuapp.com/api/posts/:id</>

    `
