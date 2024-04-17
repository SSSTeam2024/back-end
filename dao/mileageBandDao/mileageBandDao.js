const MileageBand = require("../../models/mileageBandModel/mileageBand");

const createMileageBand = async (mileageBandData) => {
  return await MileageBand.create(mileageBandData);
};

const getMileageBands = async () => {
  return await MileageBand.find().populate("vehicle_type");
};

const getMileageBandById = async (id) => {
  return await MileageBand.findById(id);
};

const getMileageBandByName = async (name) => {
  return await MileageBand.findOne({ name });
};

const updateMileageBand = async (id, updateData) => {
  return await MileageBand.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteMileageBand = async (id) => {
  return await MileageBand.findByIdAndDelete(id);
};

module.exports = {
  createMileageBand,
  getMileageBands,
  getMileageBandById,
  updateMileageBand,
  deleteMileageBand,
  getMileageBandByName,
};
