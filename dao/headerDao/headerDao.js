const Header = require("../../models/headerModel/headerModel");

const createHeader = async (headerData) => {
  return await Header.create(headerData);
};

const getHeaders = async () => {
  return await Header.find();
};

const updateHeader = async (id, updateData) => {
  return await Header.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteHeader = async (id) => {
  return await Header.findByIdAndDelete(id);
};

module.exports = {
  createHeader,
  getHeaders,
  updateHeader,
  deleteHeader,
};
