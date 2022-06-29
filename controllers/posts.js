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
      Users.findById(req.params.userId).then((user) => {
        post.user = user._id;

        post.save();
      });
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
  editLikes: (req, res) => {
    console.log(req.body)
    Posts.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((post) => {
      Users.findById(req.params.userId).then((user) => {
        if (!post.likedByUsers.includes(user._id)) {
          post.likedByUsers.push(user._id);
          post.save();
        } else {
          const index = post.likedByUsers.indexOf(user._id);
          post.likedByUsers.splice(0, index);

          post.save();
        }
        console.log(post.likes)
        res.json(post);
      });
    });
  },
  editFaves: (req, res) => {
    Posts.findById(req.params.id).then((post) => {
      Users.findById(req.params.userId).then((user) => {
        if (!post.favedByUsers.includes(user._id)) {
          post.favedByUsers.push(user._id);
          post.save();
        } else {
          const index = post.favedByUsers.indexOf(user._id);
          post.favedByUsers.splice(0, index);

          post.save();
        }
        res.json(post);
      });
    });
  },
  delete: (req, res) => {
    Posts.findByIdAndDelete(req.params.id).then((post) => {
      res.json(post);
    });
  },
};
