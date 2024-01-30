const mongoose = require('mongoose');

const complainSchema = new mongoose.Schema({
  id_corporate: String,
  id_corporate: String,
  subject: String,
  description: String,
  claimDate: String,
  responseMessage: String,
  responseDate: String,
  status: String,
  media: {
    data: Buffer,
    contentType: String
  },
});

module.exports = mongoose.model('Todo', todoSchema);