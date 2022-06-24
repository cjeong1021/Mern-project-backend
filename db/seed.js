const mongoose = require('./connection');
const Users = require('../models/Users');

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

Users.deleteMany({}).then(() => {
  Users.create(data).then((res) => {
    console.log(res);
    process.exit();
  });
});
