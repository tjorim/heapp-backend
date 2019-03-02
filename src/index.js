require('dotenv').config()

console.log('Hello Node.js project.');
console.log('Hello ever running Node.js project.');

console.log(process.env.MY_SECRET);

//Database
const mongoose = require('mongoose');
var path = require('path');

const express = require('express');
const app = express();


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

app.get('/users', (req, res) => {
  return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users', (req, res) => {
  return res.send('PUT HTTP method on user resource');
});

app.delete('/users', (req, res) => {
  return res.send('DELETE HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Express is running on port ${process.env.PORT}`);
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
