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
    posts: [],
  },
];

const postData = [
  {
    post: "Hi, I'm Snoppy, nice to meet you",
    likes: 2,
    user: [],
  },
];

Users.deleteMany({}).then(() => {
  Posts.deleteMany({}).then(() => {
    Users.create(data).then((users) => {
      Posts.create(postData).then((posts) => {
        users[0].posts.push(posts[0]._id);
        posts[0].user.push(users[0]._id);

        console.log(users);
        console.log(posts);
      });
    });
  });
});
