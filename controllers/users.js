const Users = require('../models/Users');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
const { restart } = require('nodemon');

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
  signup: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array()[0].msg,
      });
    }

    const user = new Users(req.body);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }

      return res.json({
        message: 'Success',
        user,
      });
    });
  },
  signin: (req, res) => {
    const { email, password } = req.body;

    Users.findOne({ email }, (err, user) => {
      // Check if inputted email and password are valid
      if (err || !user) {
        return res.status(400).json({
          error: 'Email not found',
        });
      }

      if (!user.authenticate(password)) {
        return res.status(400).json({
          error: 'Email and password do not match',
        });
      }

      // When checks pass, create a JSON Web Token
      const token = jwt.sign({ _id: Users._id }, process.env.SECRET);

      // Put token in cookies, expires in 24 hours
      res.cookie('token', token, { expire: new Date() + 1 });

      // Send response
      const { _id, name, email } = user;
      return res.json({
        token,
        user: { _id, name, email },
      });
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
  follow: (req, res) => {
    Users.findByIdAndUpdate(
      req.params.id,
      { $push: { followers: req.body.id } },
      { new: true },
      (err, result) => {
        if (err) {
          return res.json(err);
        }
        Users.findByIdAndUpdate(
          req.body._id,
          {
            $push: {
              following: req.params.id,
            },
          },
          { new: true }
        )
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            res.json(err);
          });
      }
    );
  },
};
