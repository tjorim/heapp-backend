require('dotenv').config();

console.log('Hello Node.js project.');
console.log('Hello ever running Node.js project.');

console.log(process.env.MY_SECRET);

const express = require('express');

// Express related imports
// other node package imports
const bodyParser = require('body-parser');
const routes = require('./routes');
const { models, connectDb } = require('./models');

const app = express();

// additional Express stuff: middleware, routes, ...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

/*
app.get('/', (req, res) => res.send('Received a GET HTTP method'));

app.post('/', (req, res) => res.send('Received a POST HTTP method'));

app.put('/', (req, res) => res.send('Received a PUT HTTP method'));

app.delete('/', (req, res) => res.send('Received a DELETE HTTP method'));

app.post('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});
*/

app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('rwieruch'),
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUsersWithMessages();
  }

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}.`);
  });
});

const createUsersWithMessages = async () => {
  const user1 = new models.User({
    username: 'rwieruch',
  });

  const user2 = new models.User({
    username: 'ddavids',
  });

  const message1 = new models.Message({
    text: 'Published the Road to learn React',
    user: user1.id,
  });

  const message2 = new models.Message({
    text: 'Happy to release ...',
    user: user2.id,
  });

  const message3 = new models.Message({
    text: 'Published a complete ...',
    user: user2.id,
  });

  await message1.save();
  await message2.save();
  await message3.save();

  await user1.save();
  await user2.save();
};

/*
const users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};


const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
*/
