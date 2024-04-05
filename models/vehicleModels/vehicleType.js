const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  type: String,
  base_change: String,
  coverage_mile: String,
});
module.exports = mongoose.model("VehiculeType", vehicleSchema);