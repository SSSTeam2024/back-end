const mongoose = require("mongoose");

const attachmentSchema = new mongoose.Schema(
  {
    name: String,
    attachment: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Attachment", attachmentSchema);
