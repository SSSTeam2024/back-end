const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  email: String,
  phone: String,
  activity: String,
  address: String,
  service_date: String,
  status: String,
  legal_status:String,
  account_name: String,
  corporateCategory:String,
  contract:String,
  sort_code: Number,
  account_number: Number,
  bank_name: String,
  id_creation_date: Date,
  id_file: String,
  api_token: String,

},{timestamps:true});

module.exports = mongoose.model('School', schoolSchema);