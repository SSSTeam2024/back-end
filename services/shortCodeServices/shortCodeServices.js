const ShortCodeDao = require("../../dao/shortCodeDao/shortCodeDao");

const createShortCode = async (ShortCodeData) => {
  let check_list = await ShortCodeDao.createShortCode(ShortCodeData);
  return check_list;
};

const updateShortCode = async (id, updateData) => {
  return await ShortCodeDao.updateShortCodeById(id, updateData);
};

const deleteShortCode = async (id) => {
  return await ShortCodeDao.deletedShortCode(id);
};

const getShortCodes = async () => {
  return await ShortCodeDao.getShortCodes();
};

module.exports = {
  createShortCode,
  updateShortCode,
  deleteShortCode,
  getShortCodes,
};
