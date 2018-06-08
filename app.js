const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { checkCityName } = require('./controller');

const DB_URL = require('./config');

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log(`Connected to Database at ${DB_URL}`);
  })
  .catch(console.log);

app.use(bodyParser.json());

app.get('/:cityname', checkCityName);

app.get('/*', (req, res, next) => {
  next({ status: 404 });
});

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send({ message: '404: Page not found' });
  } else if (err.status === 400) {
    res.status(400).send({ message: '400: Bad Request' });
  } else next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Internal Server Error' });
});

module.exports = app;
