const express = require('express');

const app = express();

const parser = require('body-parser');
// const cors = require('cors');
// insert models here
const userController = require('./controllers/users');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// app.use(
//   cors({
//     origin: '*',
//   })
// );

const routes = require('./routes/index');

app.use(routes);

app.listen(8000, () => {
  console.log('port 8000');
});
