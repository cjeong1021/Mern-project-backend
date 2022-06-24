const Posts = require('../models/Posts');

module.exports = {
  index: (req, res) => {
    Posts.find().then((post) => {
      res.json(post);
    });
  },
};
