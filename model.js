const mongoose = require('mongoose');
const Schema = mongoose.Schema;

console.log(mongoose);

const TownSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('towns', TownSchema);
