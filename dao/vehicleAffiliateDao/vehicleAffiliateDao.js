const VehicleAffiliate = require("../../models/vehicleAffiliate/vehicleAffiliate");

const createVehicleAffiliate = async (vehicleAffiliateData) => {
  return await VehicleAffiliate.create(vehicleAffiliateData);
};

const getVehiclesAffiliate = async () => {
  return await VehicleAffiliate.find();
};

const getVehicleAffiliateById = async (id) => {
  return await VehicleAffiliate.findById(id);
};

const updateVehicleAffiliate = async (id, updateData) => {
  return await VehicleAffiliate.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deleteVehicleAffiliate = async (id) => {
  return await VehicleAffiliate.findByIdAndDelete(id);
};

module.exports = {
  deleteVehicleAffiliate,
  updateVehicleAffiliate,
  getVehicleAffiliateById,
  getVehiclesAffiliate,
  createVehicleAffiliate,
};