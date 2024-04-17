const locationDao = require("../../dao/locationDao/locationDao");

const createLocation = async (locationData) => {
  return await locationDao.createLocation(locationData);
};

const getLocations = async () => {
  return await locationDao.getLocations();
};

const getLocationById = async (id) => {
  return await locationDao.getLocationById(id);
};

const updateLocation = async (id, updateData) => {
  return await locationDao.updateLocation(id, updateData);
};

const deleteLocation = async (id) => {
  return await locationDao.deleteLocation(id);
};

module.exports = {
  createLocation,
  getLocations,
  updateLocation,
  deleteLocation,
  getLocationById,
};
