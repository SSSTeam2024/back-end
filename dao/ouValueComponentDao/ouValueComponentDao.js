const OurValue = require("../../models/ourValueComponentModel/ourValueComponentModel");

const createOurValue = async (ourValueData) => {
  return await OurValue.create(ourValueData);
};

const getOurValue = async () => {
  return await OurValue.find();
};

const updateOurValue = async (id, updateData) => {
  return await OurValue.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteOurValue = async (id) => {
  return await OurValue.findByIdAndDelete(id);
};

const addTabToOurValue = async (valueId, newTab) => {
  return await OurValue.findByIdAndUpdate(
    valueId,
    { $push: { tabs: newTab } },
    { new: true }
  );
};

module.exports = {
  createOurValue,
  getOurValue,
  updateOurValue,
  deleteOurValue,
  addTabToOurValue,
};
