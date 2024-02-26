const stopDao = require('../../dao/stopDao/stopDao');

const createStop = async (stopData) => {
  return await stopDao.createStop(stopData);
};

const deleteStop = async (id) => {
  return await stopDao.deleteStop(id);
};

module.exports = {
  createStop,
  deleteStop,
};
