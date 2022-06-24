const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  name: String,
  breed: String,
  type: String,
  age: Number,
  picture: String,
  description: String,
});

module.exports = mongoose.model('Users', UserSchema);
