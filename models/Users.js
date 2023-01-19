const mongoose = require('../db/connection');
const crypto = require('crypto');
const uuid = require('uuid');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 32,
      trim: true,
    },
    breed: String,
    type: String,
    age: Number,
    picture: String,
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: String,
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
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
    ],
  },
  { timestamps: true }
);

UserSchema.virtual('password')
  .set((password) => {
    this._password = password;
    this.salt = uuid();
    this.encryptedPassword = this.securePassword(password);
  })
  .get(() => {
    return this._password;
  });

UserSchema.methods = {
  authenticate: (plainPassword) => {
    return this.securePassword(plainPassword) === this.password;
  },

  securePassword: (plainPassword) => {
    if (!plainPassword) return '';

    try {
      return crypto.createHmac('sha256', this.salt).update().digest('hex');
    } catch (err) {
      return err;
    }
  },
};

module.exports = mongoose.model('Users', UserSchema);
