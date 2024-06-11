const mongoose = require("mongoose");

const emailQueueSchema = new mongoose.Schema(
  {
    newEmail: String,
    subject: String,
    body: String,
    file: String,
    sender: String,
    name: String,
    quote_Id: String,
    date_email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EmailQueue", emailQueueSchema);
