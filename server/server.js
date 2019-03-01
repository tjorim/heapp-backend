const express = require('express');
const routes = require('./routes/index');


//Database
const mongoose = require('mongoose');




const app = express();
app.use('/', routes);

module.exports = app;


mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
