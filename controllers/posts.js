const Posts = require('../models/Posts');
const Users = require('../models/Users');

module.exports = {
  index: (req, res) => {
    Posts.find().then((post) => {
      res.json(post);
    });
  },
  show: (req, res) => {
    Posts.findById(req.params.id).then((post) => {
      res.json(post);
    });
  },
  create: (req, res) => {
    Posts.create(req.body).then((post) => {
      res.json(post);
    });
  },
  edit: (req, res) => {
    Posts.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (post) => {
        res.json(post);
      }
    );
  },
  delete: (req, res) => {
    Posts.findByIdAndDelete(req.params.id).then((post) => {
      res.json(post);
    });
  },
};
