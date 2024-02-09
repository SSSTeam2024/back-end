const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  type: String,

});

module.exports = mongoose.model('Journey', journeySchema);