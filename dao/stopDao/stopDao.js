const Stop = require('../../models/stopModel/stop');

const createStop = async (stopData) => {
  return await Stop.create(stopData);
};

const deleteStop = async (id) => {
  return await Stop.findByIdAndDelete(id);
};

module.exports = {
  createStop,
  deleteStop,
};
