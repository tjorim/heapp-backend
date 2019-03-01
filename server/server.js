const express = require('express');
const routes = require('./../routes/index');
var path = require('path');

//Database
const mongoose = require('mongoose');


const app = require('./../app');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

// mongoose.connect(process.env.DATABASE, { useMongoClient: true });
// mongoose.Promise = global.Promise;
// mongoose.connection
//   .on('connected', () => {
//     console.log(`Mongoose connection open on ${process.env.DATABASE}`);
//   })
//   .on('error', (err) => {
//     console.log(`Connection error: ${err.message}`);
//   });
