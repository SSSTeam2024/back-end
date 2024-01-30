const passengerLuggageLimitsType = require('../../models/passengerLuggageLimitsModels/passenegerLuggageLimits');

const createPassengerLuggageLimits = async (PassengerLuggageLimitsData) => {
  return await passengerLuggageLimitsType.create(PassengerLuggageLimitsData);
};
const updatePassengerLuggageLimits = async (id, updateData) => {
    return await passengerLuggageLimitsType.findByIdAndUpdate(id, updateData, { new: true });
  };

  const deletedPassengerLuggageLimits= async (id) => {
    return await passengerLuggageLimitsType.findByIdAndDelete(id);
  };

  const getPassengerLuggageLimits= async () => {
    return await passengerLuggageLimitsType.find();
  };
module.exports = {
    createPassengerLuggageLimits,
    updatePassengerLuggageLimits,
    deletedPassengerLuggageLimits,
    getPassengerLuggageLimits
  };