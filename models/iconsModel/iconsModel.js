const mongoose = require("mongoose");

const iconSchema = new mongoose.Schema({
  label: { type: String, required: false },
  code: { type: String, required: false },
});

module.exports = mongoose.model("Icon", iconSchema);
