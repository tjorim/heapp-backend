require('dotenv').config();

console.log('Hello Node.js project.');
console.log('Hello ever running Node.js project.');

console.log(process.env.MY_SECRET);

const models = require('./models');
const routes = require('./routes');

//Database
const mongoose = require('mongoose');
var path = require('path');

const bodyParser = require('body-parser')

const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

/*
app.post('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});
*/

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

////

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}.`);
});

//app.use('/', routes);
/*
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})


// mongoose.connect(process.env.DATABASE, { useMongoClient: true });
// mongoose.Promise = global.Promise;
// mongoose.connection
//   .on('connected', () => {
//     console.log(`Mongoose connection open on ${process.env.DATABASE}`);
//   })
//   .on('error', (err) => {
//     console.log(`Connection error: ${err.message}`);
//   });


/*
const MongoClient = require('mongodb').MongoClient;
const mongodbUser = 'heapp';
const mongodbPassword = 'm8KUerE8wwBDc67t';
const uri = `mongodb+srv://${mongodbUser}:${mongodbPassword}@cluster0-gnpmh.gcp.mongodb.net/test?retryWrites=true`;
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});
*/

/*
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password
    })
    .then(() => res.sendStatus(200))
})
*/
