const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  email: String,
  name: String,
  phone: String,
  start_point: {
    placeName: String,
    coordinates: {
      lat: Number,
      lon: Number
    }
},
destination_point: {
  placeName: String,
  coordinates: {
    lat: Number,
    lon: Number
  }
},
estimated_start_time: String,
estimated_return_start_time: String,
status: String,
enquiryDate: String,
});

module.exports = mongoose.model('Visitor', visitorSchema);