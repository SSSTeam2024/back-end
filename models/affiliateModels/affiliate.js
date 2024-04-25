const mongoose = require('mongoose');

const affiliateSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  phone: String,
  category: String,
  region: [String],
  service_date: String,
  statusAffiliate: String,
  account_name: String,
  sort_code: Number,
  account_number: Number,
  bank_name: String,
  login: String,
  password: String,
  id_number: String,
  id_creation_date: String,
  id_file: String,
  license_id: String,
  license_date: String,
  license_file: String,
  notes: String,
  vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'VehiculeType'}],
  fleetNumber: String,
  enquiryDate:String
});

module.exports = mongoose.model('Affiliate', affiliateSchema);
