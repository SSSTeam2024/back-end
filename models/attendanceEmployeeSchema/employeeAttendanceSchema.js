const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  id_quote: String,
  id_employee: String,
  id_company: String,
  presence: String,
});

module.exports = mongoose.model("employeeAttendance", attendanceSchema);
