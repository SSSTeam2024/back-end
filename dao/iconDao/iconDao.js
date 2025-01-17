const Icon = require("../../models/iconsModel/iconsModel");

const createIcon = async (iconData) => {
  return await Icon.create(iconData);
};

const getIcons = async () => {
  return await Icon.find();
};

const updateIcon = async (id, updateData) => {
  return await Icon.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteIcon = async (id) => {
  return await Icon.findByIdAndDelete(id);
};

module.exports = {
  createIcon,
  getIcons,
  updateIcon,
  deleteIcon,
};
