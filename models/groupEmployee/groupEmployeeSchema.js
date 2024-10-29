const mongoose = require("mongoose");

const groupEmployeeSchema = new mongoose.Schema({
  groupName: String,
  note: String,
  startPoint: String,
  dateStart: String,
  timeStart: String,
  Destination: String,
  dateEnd: String,
  timeEnd: String,
  status: String,
  passenger_number: String,
  id_company: String,
  luggage_details: String,
  vehicle_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VehiculeType",
    default: null,
  },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Programm",
    required: false,
  },
  unit_price: String,
});

module.exports = mongoose.model("groupEmployee", groupEmployeeSchema);
