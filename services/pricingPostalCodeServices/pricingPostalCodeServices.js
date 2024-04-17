const pricingPostalCodeDao = require("../../dao/pricingPostalCodeDao/pricingPostalCodeDao");

const createPricingPostalCode = async (pricingPostalCodeData) => {
  return await pricingPostalCodeDao.createPricingPostalCode(
    pricingPostalCodeData
  );
};

const getPricingPostalCodeById = async (id) => {
  return await pricingPostalCodeDao.getPricingPostalCodeById(id);
};

const getPricingPostalCodes = async () => {
  return await pricingPostalCodeDao.getPricingPostalCodes();
};

const updatePricingPostalCode = async (id, updateData) => {
  return await pricingPostalCodeDao.updatePricingPostalCode(id, updateData);
};

const deletePricingPostalCode = async (id) => {
  return await pricingPostalCodeDao.deletePricingPostalCode(id);
};

module.exports = {
  createPricingPostalCode,
  getPricingPostalCodeById,
  getPricingPostalCodes,
  updatePricingPostalCode,
  deletePricingPostalCode,
};
