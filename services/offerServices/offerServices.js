const offerDao = require("../../dao/offerDao/offerDao");

const createOffer = async (offerData) => {
  return await offerDao.createOffer(offerData);
};

const getOffers = async () => {
  return await offerDao.getOffers();
};

const updateOffer = async (id, updateData) => {
  return await offerDao.updateOffer(id, updateData);
};

const deleteOffer = async (id) => {
  return await offerDao.deleteOffer(id);
};

module.exports = {
  createOffer,
  getOffers,
  updateOffer,
  deleteOffer,
};
