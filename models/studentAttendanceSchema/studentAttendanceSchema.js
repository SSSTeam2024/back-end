const mongoose = require("mongoose");

const studentAttendanceSchema = new mongoose.Schema(
  {
    id_quote: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quote",
      default: null,
    },
    id_student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: null,
    },
    id_school: String,
    presence: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StudentAttendance", studentAttendanceSchema);
