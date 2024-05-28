const mongoose = require("mongoose");

const affiliateSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  phone: String,
  category: String,
  service_date: String,
  statusAffiliate: String,
  account_name: String,
  sort_code: Number,
  account_number: Number,
  bank_name: String,
  login: String,
  password: String,
  api_token: String,
  id_creation_date: String,
  id_file: String,
  number_file: String,
  insurance_number: String,
  insurance_date: String,
  insurance_file: String,
  avatar: String,
  notes: String,
  // vehicles: [
  //   {
  //     type: String,
  //     qty: String,
  //   },
  // ],
  vehicles: [],
  fleetNumber: String,
  enquiryDate: String,
  coverageDistance: String,
  coverageArea: [
    {
      placeName: String,
      coordinates: {
        lat: String,
        lng: String,
      },
      raduis: String,
    },
  ],
  years_experience: String,
  website: String,
  progress: String,
});

module.exports = mongoose.model("Affiliate", affiliateSchema);
