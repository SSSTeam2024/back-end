const waitingBand = require('../../models/waitingBandModel/waitingBand');

const createWaitingBand = async (waitingBandData) => {
  return await waitingBand.create(waitingBandData);
};

const getWaitingBands = async () => {
  return await waitingBand.find().populate('vehicle_type');
};

const updateWaitingBand = async (id, updateData) => {
  return await waitingBand.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteWaitingBand = async (id) => {
  return await waitingBand.findByIdAndDelete(id);
};

module.exports = {
  createWaitingBand,
  getWaitingBands,
  updateWaitingBand,
  deleteWaitingBand,
};
