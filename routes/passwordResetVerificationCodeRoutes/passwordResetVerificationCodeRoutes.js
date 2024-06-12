const express = require("express");
const passwordResetVerifCodeController = require("../../controllers/passwordResetVerificationCodeController/passwordResetVerificationCodeController");

const router = express.Router();

router.post(
  "/verify-password-reset-code",
  passwordResetVerifCodeController.verifyPasswordResetCode
);

module.exports = router;
