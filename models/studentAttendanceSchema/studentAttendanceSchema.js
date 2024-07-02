const mongoose = require("mongoose");

const studentAttendanceSchema = new mongoose.Schema({
  id_quote: String,
  id_student: String,
  id_school: String,
  presence: String,
});

module.exports = mongoose.model("StudentAttendance", studentAttendanceSchema);
