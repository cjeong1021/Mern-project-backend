const mongoose = require('./connection');
const Users = require('../models/Users');
const Posts = require('../models/Posts');

const data = [
  {
    name: 'Snoopy',
    breed: 'Husky',
    type: 'Dog',
    age: 7,
    picture: 'https://i.imgur.com/ib8sGEl.jpg',
    description: 'Good Girl',
  },
];

const postData = [
  {
    post: "Hi, I'm Snoppy, nice to meet you",
    likes: 2,
  },
];

Users.deleteMany({}).then(() => {
  Users.create(data).then((user) => {
    console.log(user);
  });
});

Posts.deleteMany({}).then(() => {
  Posts.create(postData).then((post) => {
    console.log(post);
  });
});
