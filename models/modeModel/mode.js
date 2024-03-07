const mongoose = require("mongoose");

const modeSchema = new mongoose.Schema({
  type: String,
});

module.exports = mongoose.model("Mode", modeSchema);
