const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String
});

module.exports = mongoose.model('Visitor', visitorSchema);