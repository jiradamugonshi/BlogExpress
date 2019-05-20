var express = require('express');
var router = express.Router();
var blogModel = require('../models/blog');

router.get('/', function (req, res, next) { 
  blogModel.getModels()
  .then(docs => {
    res.render('index', {title: 'BlogExpress', blogs: docs });
  })
  .catch(err => {
    throw err;
  })

  Blog.find(function(err, result) {
    if (err) {
      throw err;
    }
    res.render('index', {title: 'BlogExpress', blogs: result })
  })
});

module.exports = router;
