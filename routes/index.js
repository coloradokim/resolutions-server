var express = require('express');
var router = express.Router();
var postings = require('../data/posting');

router.get('/', function(req, res, next) {
  res.json(postings);
});

module.exports = router;
