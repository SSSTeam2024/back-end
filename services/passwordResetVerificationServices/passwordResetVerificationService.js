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

const deleteCode = async (id) => {
  return await PasswordResetVerificationDao.deleteCode(id);
};

module.exports = {
  updatePasswordResetCode,
  getPasswordResetCodeById,
  deleteCode,
};
