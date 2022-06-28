const mongoose = require('./connection');
const Users = require('../models/Users');
const Posts = require('../models/Posts');
const Comments = require('../models/Comments');

const data = [
  {
    name: 'Snoopy',
    breed: 'Husky',
    type: 'Dog',
    age: 7,
    picture: 'https://i.imgur.com/ib8sGEl.jpg',
    username: 'Snoopy123',
    password: 'asdf',
    email: 'asdf@gmail.com',
    logIn: false,
    description: 'Good Girl',
  },
  {
    name: 'Milo',
    breed: 'Maine Coon',
    type: 'Cat',
    age: 7,
    picture:
      'https://www.zooplus.ie/magazine/wp-content/uploads/2019/04/maine-coon-cat-breed.jpg',
    username: 'milo123',
    password: 'asdf',
    email: 'asdf@gmail.com',
    logIn: false,
    description: 'Good Girl',
  },
];

const postData = [
  {
    title: 'asdf',
    description: "Hi, I'm Snoppy, nice to meet you",
    likes: 2,
    picture: 'https://i.imgur.com/ib8sGEl.jpg',
  },
  {
    title: 'asdf',
    description: "Hello, I'm Milo",
    likes: 2,
    picture:
      'https://www.zooplus.ie/magazine/wp-content/uploads/2019/04/maine-coon-cat-breed.jpg',
  },
];

const commentData = [
  {
    comment: 'this is a comment',
  },
];

Users.deleteMany({}).then(() => {
  Posts.deleteMany({}).then(() => {
    Comments.deleteMany({}).then(() => {
      Users.create(data).then((users) => {
        Posts.create(postData).then((posts) => {
          Comments.create(commentData).then((comments) => {
            users[0].posts.push(posts[0]._id);
            users[0].likedPosts.push(posts[0]._id);
            users[0].savedPosts.push(posts[0]._id);
            posts[0].user = users[0]._id;
            posts[0].likedByUsers.push(users[0]._id);
            posts[0].favedByUsers.push(users[0]._id);
            comments[0].user.push(users[0]._id);

            users[1].posts.push(posts[1]._id);
            users[1].likedPosts.push(posts[1]._id);
            users[1].savedPosts.push(posts[1]._id);
            posts[1].user = users[1]._id;
            posts[1].likedByUsers.push(users[1]._id);
            posts[1].favedByUsers.push(users[1]._id);

            users[0].save();
            posts[0].save();
            comments[0].save();
            users[1].save();
            posts[1].save();
          });
        });
      });
    });
  });
});
