const Users = require('../models/Users');

module.exports = {
  index: (req, res) => {
    Users.find().then((user) => {
      res.json(user);
    });
  },
  show: (req, res) => {
    Users.findById(req.params.id).then((user) => {
      res.json(user);
    });
  },
  create: (req, res) => {
    Users.create(req.body).then((user) => {
      res.json(user);
    });
  },
  edit: (req, res) => {
    Users.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (user) => {
        res.json(user);
      }
    );
  },
  delete: (req, res) => {
    Users.findByIdAndDelete(req.params.id).then((user) => {
      res.json(user);
    });
  },
};
