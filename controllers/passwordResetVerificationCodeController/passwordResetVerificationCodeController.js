const passwordResetVerificationService = require("../../services/passwordResetVerificationServices/passwordResetVerificationService");

const verifyPasswordResetCode = async (req, res) => {
  try {
    const { user_id, role, current_date, current_time, code } = req.body;

    let verificationCodeDoc =
      await passwordResetVerificationService.getPasswordResetCodeById(
        user_id,
        role,
        code
      );
    console.log("verificationCodeDoc", verificationCodeDoc);
    if (verificationCodeDoc.length > 0) {
      console.log("Verification code found:", verificationCodeDoc[0]);
      let code = verificationCodeDoc[0];
      await passwordResetVerificationService.updatePasswordResetCode(code._id);
      res.json({ msg: "Ok" });
    } else {
      console.log("Verification code not fount");
      res.json({ msg: "not_found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  verifyPasswordResetCode,
};
