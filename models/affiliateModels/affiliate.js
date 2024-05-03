const mongoose = require('mongoose');

const affiliateSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  phone: String,
  category: String,
  region: String,
  service_date: String,
  status: String,
  account_name: String,
  sort_code: String,
  account_number: String,
  bank_name: String,
  login: String,
  password: String,
  id_number: String,
  id_creation_date: String,
  id_file: String,
  number_file: String,
  license_id: String,
  license_date: String,
  license_file: String,
  api_token:String,
  contact_information: String,
  website:String,
  insurance_number:String,
  insurance_date:String,
  insurance_file:String,
  years_operation:String,
  operator_address:String,
  vehicles: [],
  progress: String,


});

module.exports = mongoose.model('Affiliate', affiliateSchema);
