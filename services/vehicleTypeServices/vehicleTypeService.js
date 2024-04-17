const VehicleTypeDao = require('../../dao/vehicleTypeDao/vehicleTypeDao');

const createVehicleType= async (VehicleTypeData) => {
  return await VehicleTypeDao.createVehicleType(VehicleTypeData);
};

const updateVehicleType = async (id, updateData) => {
    return await VehicleTypeDao.updateVehicleType(id, updateData);
  };

  const deleteVehicleType = async (id) => {
    return await VehicleTypeDao.deletedVehicleType(id);
  };

  const getVehicleTypes= async () => {
    return await VehicleTypeDao.getVehicleTypes();
  };

  const getVehicleTypeById = async (id) => {
    return await VehicleTypeDao.getVehicleTypeByID(id);
  };

module.exports = {
    createVehicleType,
    updateVehicleType,
    deleteVehicleType,
    getVehicleTypes,
    getVehicleTypeById
  };