const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortCodeSchema = new mongoose.Schema({
  name: String,
  text: String,
});

module.exports = mongoose.model("ShortCode", shortCodeSchema);
