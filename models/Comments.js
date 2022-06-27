const mongoose = require('../db/connection');

const CommentSchema = new mongoose.Schema({
  comment: String,
  likes: Number,
  user: [
    {
      ref: 'Users',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model('Comments', CommentSchema);
