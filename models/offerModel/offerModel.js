const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const offerSchema = new Schema(
  {
    name: String,
    school_id: { type: Schema.Types.ObjectId, ref: "School", default: null },
    company_id: { type: Schema.Types.ObjectId, ref: "Company", default: null },
    contract_id: {
      type: Schema.Types.ObjectId,
      ref: "Contract",
      default: null,
    },
    vehicle_id: { type: Schema.Types.ObjectId, ref: "Vehicle", default: null },
    driver_id: { type: Schema.Types.ObjectId, ref: "Driver", default: null },
    pick_up: String,
    destination: String,
    cost: String,
    offer_number: String,
    offer_status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offer", offerSchema);
