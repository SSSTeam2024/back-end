const Fleet = require("../../models/fleetComponentModel/fleetComponentModel");

const createFleet = async (fleetData) => {
  return await Fleet.create(fleetData);
};

const getFleets = async () => {
  return await Fleet.find();
};

const getFleetById = async (id) => {
  return await Fleet.findById(id);
};

const deleteFleet = async (id) => {
  return await Fleet.findByIdAndDelete(id);
};

const updateFleet = async (id, updateData) => {
  return await Fleet.findByIdAndUpdate(id, updateData, { new: true });
};

module.exports = {
  createFleet,
  getFleetById,
  getFleets,
  deleteFleet,
  updateFleet,
};
