const mongoose = require("mongoose");

const checkTypeSchema = new mongoose.Schema({
  type: [String],
  duration: String, // MM:SS
});

module.exports = mongoose.model("CheckType", checkTypeSchema);
