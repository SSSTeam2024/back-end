const mongoose = require("mongoose");

const defectSchema = new mongoose.Schema({
  vehicle: String,
  time: String,
  level: String,
  issue: String,
  defectStatus: String,
  note: String,
  date: String,
});

module.exports = mongoose.model("Defect", defectSchema);
