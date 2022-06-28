const mongoose = require('../db/connection');

const CommentSchema = new mongoose.Schema({
  comment: String,
  user: {
    ref: 'Users',
    type: mongoose.Schema.Types.ObjectId,
  },

  post: {
    ref: 'Posts',
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('Comments', CommentSchema);
