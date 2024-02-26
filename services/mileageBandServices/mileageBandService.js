const mileageBandDao = require('../../dao/mileageBandDao/mileageBandDao');

const createMileageBand = async (mileageBandData) => {
  return await mileageBandDao.createMileageBand(mileageBandData);
};

const getMileageBands = async () => {
  return await mileageBandDao.getMileageBands();
};

const getMileageBandById = async (id) => {
  return await mileageBandDao.getMileageBandById(id);
}

const updateMileageBand = async (id, updateData) => {
  return await mileageBandDao.updateMileageBand(id, updateData);
};

const deleteMileageBand = async (id) => {
  return await mileageBandDao.deleteMileageBand(id);
};

module.exports = {
  createMileageBand,
  getMileageBands,
  getMileageBandById,
  updateMileageBand,
  deleteMileageBand,
};
