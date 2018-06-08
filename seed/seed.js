const mongoose = require('mongoose');
const TownSchema = require('../model.js');
const { data } = require('./data/gbData.json');
const DB_URL = require('../config');

const seedDB = data => {
  return mongoose.connection
    .dropDatabase()
    .then(() => {
      return TownSchema.insertMany(data);
    })
    .catch(console.log);
};

mongoose
  .connect(DB_URL)
  .then(() => seedDB(data))
  .then(docs => {
    console.log(`${docs.length} Towns Inserted`);
  })
  .then(() => mongoose.disconnect())
  .catch(console.log);
