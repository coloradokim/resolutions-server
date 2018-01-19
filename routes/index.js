var express = require('express');
var router = express.Router();
var postings = require('../data/posting');

router.get('/', function(req, res, next) {
  res.status(200).json(postings);
});

router.post('/', function(req, res, next) {
  res.status(201);
  res.json({
    data: {
      message: 'Posting Recieved!'
    }
  });
});

module.exports = router;
