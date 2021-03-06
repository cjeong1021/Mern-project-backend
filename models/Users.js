const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  name: String,
  breed: String,
  type: String,
  age: Number,
  picture: String,
  username: String,
  password: String,
  email: String,
  logIn: Boolean,
  description: String,
  posts: [
    {
      ref: 'Posts',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  likedPosts: [
    {
      ref: 'Posts',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  savedPosts: [
    {
      ref: 'Posts',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  followers: [
    {
      ref: 'Users',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  following: [
    {
      ref: 'Users',
      type: mongoose.Schema.Types.ObjectId,
    },
  ]
});

module.exports = mongoose.model('Users', UserSchema);
