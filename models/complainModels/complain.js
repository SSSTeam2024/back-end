const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
  id_corporate: String,
  id_student: String,
  id_parent: String,
  id_employee: String,
  subject: String,
  description: String,
  complainDate: String,
  responseMessage: String,
  responseDate: String,
  status: String,
  media: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Complain', complainSchema);