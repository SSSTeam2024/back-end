const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const emailSentSchema = new mongoose.Schema(
  {
    date: String,
    quoteID: String,
    subjectEmail: String,
    from: String,
    to: String,
    emailBody: String,
    by: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("EmailSent", emailSentSchema);
