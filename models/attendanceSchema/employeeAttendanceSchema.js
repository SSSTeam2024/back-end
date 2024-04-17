const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  pickUpStation: String,
  status: String,
  timePickUp: String,
  datePickUp: String,
  tripReference: String,
  tripGroup: String,
  dropDownStation: String,
  timeDropDown: String,
  dateDropDown: String,
  id_employee: String,
  id_company: String,
});

module.exports = mongoose.model("employeeAttendance", attendanceSchema);
