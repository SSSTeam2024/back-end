const luxuryDao = require('../../dao/luxuryDao/luxuryDao');

const createLuxury = async (luxuryData) => {
  return await luxuryDao.createLuxury(luxuryData);
};

const getLuxurys = async () => {
  return await luxuryDao.getLuxurys();
};

const getLuxuryById = async (id) => {
  return await luxuryDao.getLuxuryById(id);
}

const updateLuxury = async (id, updateData) => {
  return await luxuryDao.updateLuxury(id, updateData);
};

const deleteLuxury = async (id) => {
  return await luxuryDao.deleteLuxury(id);
};

module.exports = {
  createLuxury,
  getLuxurys,
  getLuxuryById,
  updateLuxury,
  deleteLuxury,
};
