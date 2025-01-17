const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  label: { type: String, required: false },
  link: { type: String, required: false },
});

module.exports = mongoose.model("Page", pageSchema);
