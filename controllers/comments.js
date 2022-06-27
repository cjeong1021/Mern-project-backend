const Comments = require('../models/Comments');
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
        comment.user.push(user._id);

        comment.save();
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
      res.json(comment);
    });
  },
};
