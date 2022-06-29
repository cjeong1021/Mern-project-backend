const Comments = require('../models/Comments');
const Posts = require('../models/Posts');
const Users = require('../models/Users');

module.exports = {
  index: (req, res) => {
    Comments.find().then((comment) => {
      res.json(comment);
    });
  },
  show: (req, res) => {
    Comments.findById(req.params.id).then((comment) => {
      res.json(comment);
    });
  },
  create: (req, res) => {
    Comments.create(req.body).then((comment) => {
      Users.findById(req.params.userId).then((user) => {
        Posts.findById(req.params.postId).then((post) => {
          comment.user = user._id;
          comment.post = post._id;

          post.comments.push(comment._id);

          comment.save();
          post.save();
        });
      });
      res.json(comment);
    });
  },
  edit: (req, res) => {
    Comments.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (comment) => {
        res.json(comment);
      }
    );
  },
  delete: (req, res) => {
    Comments.findByIdAndDelete(req.params.id).then((comment) => {
      Posts.findByIdAndUpdate(req.params.postId).then((res) => {
        const index = res.comments.indexOf(req.params.id);
        res.comments.splice(index, 1);

        res.save();
      });
      res.json(comment);
    });
  },
};
