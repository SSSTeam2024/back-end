const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Source', sourceSchema);