const PasswordResetVerificationDao = require("../../dao/passwordResetVerificationDao/passwordResetVerificationDao");

const updatePasswordResetCode = async (id) => {
  return await PasswordResetVerificationDao.updatePasswordResetCode(id);
};

const getPasswordResetCodeById = async (id, role, code) => {
  return await PasswordResetVerificationDao.getPasswordResetCodeById(
    id,
    role,
    code
  );
};

module.exports = {
  updatePasswordResetCode,
  getPasswordResetCodeById,
};
