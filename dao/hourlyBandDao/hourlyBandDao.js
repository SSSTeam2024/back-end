const HourlyBand = require('../../models/hourlyBandModel/hourlyBand');

const createHourlyBand = async (hourlyBandData) => {
  return await HourlyBand.create(hourlyBandData);
};

const getHourlyBands = async () => {
  return await HourlyBand.find().populate('vehicle_type');
};

const updateHourlyBand = async (id, updateData) => {
  return await HourlyBand.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteHourlyBand = async (id) => {
  return await HourlyBand.findByIdAndDelete(id);
};

module.exports = {
  createHourlyBand,
  getHourlyBands,
  updateHourlyBand,
  deleteHourlyBand,
};
