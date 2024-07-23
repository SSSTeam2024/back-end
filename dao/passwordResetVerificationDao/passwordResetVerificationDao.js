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
  let query;

  if (code !== "") {
    query = {
      user_id: id,
      user_role: role,
      verification_code: code,
    };
  } else if (code === "") {
    query = {
      user_id: id,
      user_role: role,
    };
  }

  const passwordResetCode = await PasswordResetVerif.find(query)
    .sort({ createdAt: -1 })
    .limit(1)
    .exec();

  return passwordResetCode;
};

const deleteCode = async (id) => {
  return await PasswordResetVerif.findByIdAndDelete(id);
};

module.exports = {
  createPasswordVerificationCode,
  updatePasswordResetCode,
  getPasswordResetCodeById,
  deleteCode,
};
