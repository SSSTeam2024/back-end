const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const regionalPricingSchema = new mongoose.Schema(
  {
    title: String,
    type_vehicle: { type: Schema.Types.ObjectId, ref: "VehiculeType" },
    location: { type: Schema.Types.ObjectId, ref: "Location" },
    miles: String,
    uplift: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RegionalPricing", regionalPricingSchema);
