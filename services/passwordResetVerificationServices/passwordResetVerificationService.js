const PasswordResetVerificationDao = require("../../dao/passwordResetVerificationDao/passwordResetVerificationDao");

const createCode = async (data) => {
  return await PasswordResetVerificationDao.createPasswordVerificationCode(
    data
  );
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
  createCode,
  getPasswordResetCodeById,
  deleteCode,
};
