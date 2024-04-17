const luggageDao = require('../../dao/luggageDao/luggageDao');

const createLuggage= async (luggageData) => {
  return await luggageDao.createLuggage(luggageData);
};

const updateLuggage = async (id, updateData) => {
    return await luggageDao.updateLuggage(id, updateData);
  };

  const deleteLuggage = async (id) => {
    return await luggageDao.deletedLuggage(id);
  };

  const getLuggages= async () => {
    return await luggageDao.getLuggages();
  };

  const getLuagggeById = async (id) => {
    return await luggageDao.getLuggageByID(id);
  };

module.exports = {
    createLuggage,
    updateLuggage,
    deleteLuggage,
    getLuggages, getLuagggeById
  };