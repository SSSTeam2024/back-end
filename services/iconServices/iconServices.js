const iconDao = require("../../dao/iconDao/iconDao");

const createIcon = async (iconData) => {
  return await iconDao.createIcon(iconData);
};

const getIcons = async () => {
  return await iconDao.getIcons();
};

const updateIcon = async (id, updateData) => {
  return await iconDao.updateIcon(id, updateData);
};

const deleteIcon = async (id) => {
  return await iconDao.deleteIcon(id);
};

module.exports = {
  createIcon,
  getIcons,
  updateIcon,
  deleteIcon,
};
