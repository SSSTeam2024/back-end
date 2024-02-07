const mongoose = require('mongoose');

const emailTemplateSchema = new mongoose.Schema({
  name: String,
  body: String,
  for_who: String
});

module.exports = mongoose.model('EmailTemplate', emailTemplateSchema);