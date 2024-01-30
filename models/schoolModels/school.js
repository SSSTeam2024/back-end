const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  username: String,
  login: String,
  password: String,
  email: String,
  phone: String,
  activity: String,
  address: String,
  service_date: String,
  status: String,
  account_name: String,
  sort_code: Number,
  account_number: Number,
  bank_name: String,
  id_creation_date: Date,
  id_file: {
    data: Buffer,
    contentType: String
  },

});

module.exports = mongoose.model('School', schoolSchema);