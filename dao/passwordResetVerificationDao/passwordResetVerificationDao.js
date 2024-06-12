const PasswordResetVerif = require("../../models/passwordResetVerificationModels/passwordResetVerificationModel");

const createPasswordVerificationCode = async (codeData) => {
  return await PasswordResetVerif.create(codeData);
};

const updatePasswordResetCode = async (id) => {
  return await PasswordResetVerif.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        verification_status: "Verified",
      },
    }
  );
};

const getPasswordResetCodeById = async (id, role, code) => {
  const query = {
    user_id: id,
    user_role: role,
    verification_code: code,
    verification_status: "Not verified",
  };

  const passwordResetCode = await PasswordResetVerif.find(query)
    .sort({ createdAt: -1 })
    .limit(1)
    .exec();

  return passwordResetCode;
};

module.exports = {
  createPasswordVerificationCode,
  updatePasswordResetCode,
  getPasswordResetCodeById,
};
