const mongoose = require('mongoose');

const luxurySchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Luxury', luxurySchema);