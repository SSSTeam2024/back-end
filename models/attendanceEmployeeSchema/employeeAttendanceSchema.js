const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  id_quote: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quote",
    default: null,
  },
  id_employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    default: null,
  },
  id_company: String,
  presence: String,
});

module.exports = mongoose.model("employeeAttendance", attendanceSchema);
