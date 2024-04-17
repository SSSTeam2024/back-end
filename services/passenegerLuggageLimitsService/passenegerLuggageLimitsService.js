const PassengerLuggageLimitsDao = require('../../dao/passengerLuggageLimitsDao/passengerLuggageLimitsDao');

const createPassengerLuggageLimits= async (PassengerLuggageLimitsData) => {
  return await PassengerLuggageLimitsDao.createPassengerLuggageLimits(PassengerLuggageLimitsData);
};

const updatePassengerLuggageLimits= async (id, updateData) => {
    return await PassengerLuggageLimitsDao.updatePassengerLuggageLimits(id, updateData);
  };

  const deletePassengerLuggageLimits = async (id) => {
    return await PassengerLuggageLimitsDao.deletedPassengerLuggageLimits(id);
  };

  const getPassengerLuggageLimits= async () => {
    return await PassengerLuggageLimitsDao.getPassengerLuggageLimits();
  };

module.exports = {
    updatePassengerLuggageLimits,
    createPassengerLuggageLimits,
    deletePassengerLuggageLimits,
    getPassengerLuggageLimits
  };