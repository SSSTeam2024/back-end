const InThePress = require("../../models/inThePressComponentModel/inThePressComponentModel");

const createInThePress = async (inThePressData) => {
  return await InThePress.create(inThePressData);
};

const getInThePress = async () => {
  return await InThePress.find();
};

const updateInThePress = async (id, updateData) => {
  return await InThePress.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteInThePress = async (id) => {
  return await InThePress.findByIdAndDelete(id);
};

const addTabToInThePress = async (valueId, newTab) => {
  return await InThePress.findByIdAndUpdate(
    valueId,
    { $push: { news: newTab } },
    { new: true }
  );
};

const getInThePressById = async (id) => {
  return await InThePress.findById(id);
};

module.exports = {
  createInThePress,
  getInThePress,
  updateInThePress,
  deleteInThePress,
  addTabToInThePress,
  getInThePressById,
};
