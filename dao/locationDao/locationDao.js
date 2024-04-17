const Location = require("../../models/locationModels/locationModel");

const createLocation = async (locationData) => {
  return await Location.create(locationData);
};

const getLocations = async () => {
  return await Location.find();
};

const getLocationById = async (id) => {
  return await Location.findById(id);
};

const updateLocation = async (id, updateData) => {
  return await Location.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteLocation = async (id) => {
  return await Location.findByIdAndDelete(id);
};

module.exports = {
  createLocation,
  getLocations,
  updateLocation,
  deleteLocation,
  getLocationById,
};
