const hourlyBandDao = require('../../dao/hourlyBandDao/hourlyBandDao');

const createHourlyBand = async (hourlyBandData) => {
  return await hourlyBandDao.createHourlyBand(hourlyBandData);
};

const getHourlyBands = async () => {
  return await hourlyBandDao.getHourlyBands();
};

const updateHourlyBand = async (id, updateData) => {
  return await hourlyBandDao.updateHourlyBand(id, updateData);
};

const deleteHourlyBand = async (id) => {
  return await hourlyBandDao.deleteHourlyBand(id);
};

module.exports = {
  createHourlyBand,
  getHourlyBands,
  updateHourlyBand,
  deleteHourlyBand,
};
