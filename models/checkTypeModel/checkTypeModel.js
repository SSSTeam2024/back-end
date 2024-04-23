const mongoose = require("mongoose");

const checkTypeSchema = new mongoose.Schema({
  type: [
    {
      category: String,
      message: String,
      checkType_image: String,
      title: String,
    },
  ],
  duration: String, // MM:SS
});

module.exports = mongoose.model("CheckType", checkTypeSchema);