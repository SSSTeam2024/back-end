const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pricingPostalCodeSchema = new mongoose.Schema(
  {
    title: { type: Schema.Types.ObjectId, ref: "Location" },
    type_vehicle: { type: Schema.Types.ObjectId, ref: "VehiculeType" },
    postal_code: String,
    miles: String,
    uplift: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("PricingPostalCode", pricingPostalCodeSchema);
