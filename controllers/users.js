const Users = require('../models/Users');

module.exports = {
  index: (req, res) => {
    Users.find().then((user) => {
      res.json(user);
    });
  },
};
