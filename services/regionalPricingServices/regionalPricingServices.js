const regionalPricingDao = require("../../dao/regionalPricingDao/regionalPricingDao");

const createRegionalPricing = async (regionalPricingData) => {
  return await regionalPricingDao.createRegionalPricing(regionalPricingData);
};

const getRegionalPricingById = async (id) => {
  return await regionalPricingDao.getRegionalPricingById(id);
};

const getRegionalPricings = async () => {
  return await regionalPricingDao.getRegionalPricings();
};

const updateRegionalPricing = async (id, updateData) => {
  return await regionalPricingDao.updateRegionalPricing(id, updateData);
};

const deleteRegionalPricing = async (id) => {
  return await regionalPricingDao.deleteRegionalPricing(id);
};

module.exports = {
  deleteRegionalPricing,
  updateRegionalPricing,
  getRegionalPricings,
  getRegionalPricingById,
  createRegionalPricing,
};
