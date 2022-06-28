const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
  title: String,
  likes: Number,
  picture: String,
  description: String,
  user: {
    ref: 'Users',
    type: mongoose.Schema.Types.ObjectId,
  },
  likedByUsers: [
    {
      ref: 'Users',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  favedByUsers: [
    {
      ref: 'Users',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  comments: [
    {
      ref: 'Comments',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model('Posts', PostSchema);
