const express = require('express');

const router = express.Router();

const Posts = require('./post_db_helpers');

const authMiddleware = require('../auth-middleware/authMiddleWare.js');

const validatePost = require('../auth-middleware/validatePosts.js');

//Returns an array of all the post objects contained in the database.
//any url that begins  with /api/posts
router.get('/', (req, res) => {
  Posts.find()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The posts information could not be retrieved.' });
    });
});

//any url that begins with /api/posts/:id
//Returns the post object with the specified id.
router.get('/:id', (req, res) => {
  const postID = req.params.id;
  Posts.findById(postID)
    .then(post => {
      console.log(post);
      if (post.length > 0) {
        res.status(200).json(post);
      } else {
        res
          .status(400)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'The post information could not be retrieved.' });
    });
});

//Returns an array of all the comment objects associated with the post with the specified id.
//any url that begins with /api/posts/:id/comments
router.get('/:id/comments', (req, res) => {
  const commentID = req.params.id;
  console.log(`from inside of the get request `);
  Posts.findPostComments(commentID)
    .then(comment => {
      if (comment.length > 0) {
        res.status(200).json(comment);
      } else {
        res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: 'The comments information could not be retrieved.' });
    });
});

//Creates a post using the information sent inside the request body.
router.post('/', (req, res) => {
  const postBody = req.body;
  if (!postBody.title || !postBody.contents) {
    res.status(400).json({
      errorMessage: 'Please provide title and contents for the post.'
    });
  } else {
    Posts.insert(postBody)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({
          error: 'There was an error while saving the post to the database'
        });
      });
  }
});

//Creates a post for the user with the specified id using information sent inside of the request body.
router.post('/:id', (req, res) => {
  const postBody = req.body;
  if (!postBody.title || !postBody.contents) {
    res.status(400).json({
      errorMessage: 'Please provide title and contents for the post.'
    });
  } else {
    Posts.insert(postBody)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({
          error: 'There was an error while saving the post to the database'
        });
      });
  }
});

//Creates a comment for the post with the specified id using information sent inside of the request body.
router.post('/:id/comments', (req, res) => {
  const postId = req.params.id;
  const postBody = req.body;
  if (!postBody.text) {
    res
      .status(400)
      .json({ errorMessage: 'Please provide text for the comment.' });
  }
  Posts.findCommentById(postId).then(id => {
    // console.log('FROM THE .then', id);

    if (id.length === 0) {
      res
        .status(404)
        .json({ message: 'The post with the specified ID does not exist.' });
    } else {
      Posts.insertComment(postBody).then(id => {
        Posts.findCommentById(id.id)
          .then(newComment => {
            res.status(201).json(newComment);
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: 'The posts information could not be retrieved.' });
          });
      });
    }
  });
});

// Updates the post with the specified id using data from the request body.
router.put('/:id', (req, res) => {
  const postId = req.params.id;
  const changes = req.body;
  console.log(postId);
  if (!changes.title || !changes.contents) {
    res.status(400).json({
      errorMessage: 'Please provide title and contents for the post.'
    });
  } else {
    Posts.update(postId, changes)
      .then(() => {
        Posts.findById(postId).then(post => {
          // console.log(post);
          if (post) {
            res.status(200).json(post);
            console.log(post);
          } else {
            res.status(404).json({
              message: 'The post with the specified ID does not exist.'
            });
          }
        });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: 'The post information could not be modified.' });
      });
  }
});

router.delete('/:id', (req, res) => {
  const deleteId = req.params.id;
  console.log(deleteId);
  Posts.findById(deleteId).then(post => {
    if (post.length > 0) {
      res.status(200).json(post);

      Posts.remove(deleteId).catch(err => {
        res.status(500).json({ error: 'The post could not be removed' });
      });
    } else {
      res
        .status(404)
        .json({ message: 'The post with the specified ID does not exist.' });
    }
  });
});

module.exports = router;
