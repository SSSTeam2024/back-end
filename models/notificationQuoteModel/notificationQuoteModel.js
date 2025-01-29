const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    message: String,
    quote_id: String,
    typeNotif: String,
    lu: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", notificationSchema);
