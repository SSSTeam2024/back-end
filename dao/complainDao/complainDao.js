const Complain = require('../../models/complainModels/complain');

const createComplain = async (complainData) => {
  return await Complain.create(complainData);
};

const getComplains = async () => {
  return await Complain.find();
};

const getComplainById = async (id) => {
  return await Complain.findById(id);
}

const updateComplain = async (id, updateData) => {
  return await Complain.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteComplain = async (id) => {
  return await Complain.findByIdAndDelete(id);
};

module.exports = {
  createComplain,
  getComplains,
  getComplainById,
  updateComplain,
  deleteComplain,
};