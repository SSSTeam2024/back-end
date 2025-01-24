const VehicleGuide = require("../../models/vehicleGuideComponentModel/vehicleGuideComponentModel");

const createVehicleGuide = async (vehicleGuideData) => {
  return await VehicleGuide.create(vehicleGuideData);
};

const getVehicleGuide = async () => {
  return await VehicleGuide.find();
};

const updateVehicleGuide = async (id, updateData) => {
  return await VehicleGuide.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteVehicleGuide = async (id) => {
  return await VehicleGuide.findByIdAndDelete(id);
};

const addTabToVehicleGuide = async (valueId, newTab) => {
  return await VehicleGuide.findByIdAndUpdate(
    valueId,
    { $push: { vehicleType: newTab } },
    { new: true }
  );
};

const getVehicleGuideById = async (id) => {
  return await VehicleGuide.findById(id);
};

module.exports = {
  createVehicleGuide,
  getVehicleGuide,
  updateVehicleGuide,
  deleteVehicleGuide,
  addTabToVehicleGuide,
  getVehicleGuideById,
};
