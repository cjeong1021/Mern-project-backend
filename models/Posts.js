const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema({
  post: String,
  likes: Number,
  user: [
    {
      ref: 'Users',
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  // comments: [
  //   {
  //     ref: 'Comments',
  //     type: mongoose.Schema.Types.ObjectId,
  //   },
  // ],
});

module.exports = mongoose.model('Posts', PostSchema);
