const mongoose = require("mongoose");

const passwordResetVerificationSchema = new mongoose.Schema(
  {
    user_id: String,
    user_role: String,
    verification_code: String,
    expires_at_date: String, // current date
    expires_at_time: String, // 5 minutes since creation
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "PasswordResetVerification",
  passwordResetVerificationSchema
);
