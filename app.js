const app = require('express')();
const mongoose = require('mongoose');

const DB_URL = require('./config');

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log(`Connected to Database at ${DB_URL}`);
  })
  .catch(console.log);

module.exports = app;
