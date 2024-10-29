const mongoose = require("mongoose");

const groupSchoolSchema = new mongoose.Schema({
  groupName: String,
  note: String,
  startPoint: String,
  dateStart: String,
  timeStart: String,
  Destination: String,
  dateEnd: String,
  timeEnd: String,
  status: String,
  student_number: String,
  id_school: String,
  luggage_details: String,
  vehicle_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VehiculeType",
    default: null,
  },
  students: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Student", default: null },
  ],
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Programm",
    required: false,
  },
  unit_price: String,
});

module.exports = mongoose.model("groupStudent", groupSchoolSchema);
