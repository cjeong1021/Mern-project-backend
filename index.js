const express = require('express');

const app = express();

const parser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// insert models here
const userController = require('./controllers/users');

app.use(parser.json());
app.use(cookieParser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
  })
);

const routes = require('./routes/index');

app.use(routes);

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
