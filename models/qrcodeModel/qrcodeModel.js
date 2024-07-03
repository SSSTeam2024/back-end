const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const qrCodeSchema = new mongoose.Schema({
  stopName: String,
  date: String,
  stop_time: String,
  id_quote: String,
});

module.exports = mongoose.model("QRCode", qrCodeSchema);
