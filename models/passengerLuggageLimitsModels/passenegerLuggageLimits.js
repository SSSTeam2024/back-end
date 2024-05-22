const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passengerLuggageLimitsSchema = new Schema({
  max_passengers: String,
  max_luggage: {
    type: Schema.Types.ObjectId,
    ref: "Luggage",
  },
  vehicle_type: {
    type: Schema.Types.ObjectId,
    ref: "VehiculeType",
  },
});

module.exports = mongoose.model(
  "PassengerLuggageLimits",
  passengerLuggageLimitsSchema
);