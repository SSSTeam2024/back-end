const mongoose = require('mongoose');

const luggageSchema = new mongoose.Schema({
  size: String,
  description:String

});

module.exports = mongoose.model('Luggage', luggageSchema);