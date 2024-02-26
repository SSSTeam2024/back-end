const waitingBandDao = require('../../dao/waitingBandDao/waitingBandDao');

const createWaitingBand = async (waitingBandData) => {
  return await waitingBandDao.createWaitingBand(waitingBandData);
};

const getWaitingBands = async () => {
  return await waitingBandDao.getWaitingBands();
};

const updateWaitingBand = async (id, updateData) => {
  return await waitingBandDao.updateWaitingBand(id, updateData);
};

const deleteWaitingBand = async (id) => {
  return await waitingBandDao.deleteWaitingBand(id);
};

module.exports = {
  createWaitingBand,
  getWaitingBands,
  updateWaitingBand,
  deleteWaitingBand,
};
