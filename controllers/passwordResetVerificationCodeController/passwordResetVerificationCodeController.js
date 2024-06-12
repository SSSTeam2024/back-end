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
      passwordResetVerificationService.updatePasswordResetCode(code._id);
    } else {
      console.log("Verification code not fount or expired");
    }

    res.sendStatus(200);

    /* 
    if (verificationCodeDoc.length > 0) {
      console.log('Verification code found:', verificationCodeDoc[0]);
      // Additional logic to verify the code and update status can be added here
      return verificationCodeDoc[0];
    } else {
      console.log('Verification code not found or expired');
      return null;
    }
    */
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  verifyPasswordResetCode,
};
