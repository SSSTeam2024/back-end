const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pricingCalendarSchema = new mongoose.Schema({
  vehicle_type: { type: Schema.Types.ObjectId, ref: "VehiculeType" },
  name: String,
  priority: String,
  exclusive: String,
  accountCompany: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: false,
  },
  accountSchool: {
    type: Schema.Types.ObjectId,
    ref: "School",
    required: false,
  },
  startDate: String,
  startPeriod: String,
  startTime: String,
  endDate: String,
  endPeriod: String,
  endTime: String,
  days: [String],
  uplift: String,
});

module.exports = mongoose.model("PricingCalendar", pricingCalendarSchema);
