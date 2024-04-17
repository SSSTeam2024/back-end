const mongoose = require("mongoose");

const studentAttendanceSchema = new mongoose.Schema({
  pickUpStation: String,
  timePickUp: String,
  datePickUp: String,
  tripReference: String,
  tripGroup: String,
  dropDownStation: String,
  timeDropDown: String,
  dateDropDown: String,
  id_student: String,
  id_school: String,
});

module.exports = mongoose.model("StudentAttendance", studentAttendanceSchema);
