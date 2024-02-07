const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerLuggageLimitsSchema = new Schema({
  max_passengers: Number,
  max_luggage: Number,
  vehicle_type: {
    type: Schema.Types.ObjectId,
    ref: 'VehiculeType'
  }
});

module.exports = mongoose.model('PassengerLuggageLimits', passengerLuggageLimitsSchema);
