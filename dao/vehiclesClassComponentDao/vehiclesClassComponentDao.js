const VehiclesClass = require("../../models/vehiclesClassComponentModel/vehiclesClassComponentModel");

const createVehiclesClass = async (vehicleClassData) => {
  return await VehiclesClass.create(vehicleClassData);
};

const getVehiclesClass = async () => {
  return await VehiclesClass.find();
};

const updateVehiclesClass = async (id, updateData) => {
  return await VehiclesClass.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteVehiclesClass = async (id) => {
  return await VehiclesClass.findByIdAndDelete(id);
};

const addTabToVehiclesClass = async (valueId, newTab) => {
  return await VehiclesClass.findByIdAndUpdate(
    valueId,
    { $push: { vehicleTypes: newTab } },
    { new: true }
  );
};

const getVehiclesClassById = async (id) => {
  return await VehiclesClass.findById(id);
};

module.exports = {
  createVehiclesClass,
  getVehiclesClass,
  updateVehiclesClass,
  deleteVehiclesClass,
  addTabToVehiclesClass,
  getVehiclesClassById,
};
