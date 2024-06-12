const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driverFeedbackSchema = new mongoose.Schema(
  {
    driver_id: String,
    category: String,
    quote_id: { type: Schema.Types.ObjectId, ref: "Quote" },
    description: String,
    status: String,
    answer: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DriverFeedback", driverFeedbackSchema);
