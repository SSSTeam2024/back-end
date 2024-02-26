const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stopSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  long: Number
});

module.exports = mongoose.model('Stop', stopSchema);