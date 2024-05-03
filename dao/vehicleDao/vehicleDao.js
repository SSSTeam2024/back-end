const Vehicle = require('../../models/vehicleModels/vehicle');

const createVehicle = async (vehicleData) => {
  return await Vehicle.create(vehicleData);
};

const getVehicles = async () => {
  return await Vehicle.find();
};

const getVehicleById = async (id) => {
  return await Vehicle.findById(id);
}

const updateVehicle = async (id, updateData) => {
  return await Vehicle.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteVehicle = async (id) => {
  return await Vehicle.findByIdAndDelete(id);
};

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};