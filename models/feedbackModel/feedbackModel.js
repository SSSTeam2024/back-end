const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new mongoose.Schema(
  {
    driver_id: { type: Schema.Types.ObjectId, ref: "Driver", default: null },
    student_id: { type: Schema.Types.ObjectId, ref: "Student", default: null },
    employee_id: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      default: null,
    },
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

module.exports = mongoose.model("Feedback", feedbackSchema);
