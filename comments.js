// Create web server for comments

// Load modules
const express = require('express');
const router = express.Router();

// Load models
const Comment = require('../models/comment.js');

// Set routes
router.get('/', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { comments: comments });
    }
  });
});

router.post('/', (req, res) => {
  let comment = new Comment();
  comment.name = req.body.name;
  comment.comment = req.body.comment;
  comment.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

module.exports = router;