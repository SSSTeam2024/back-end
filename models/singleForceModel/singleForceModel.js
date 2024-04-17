const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forceSingleSchema = new mongoose.Schema({
  car: { type: Schema.Types.ObjectId, ref: "VehiculeType" },
  miles: String,
  hours_wait: String,
  percentage: String,
});

module.exports = mongoose.model("ForceSingle", forceSingleSchema);
