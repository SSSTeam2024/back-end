const pricingPostalCode = require("../../models/pricingPostalCodeModels/pricingPostalCodeModel");

const createPricingPostalCode = async (pricingPostalCodeData) => {
  return await pricingPostalCode.create(pricingPostalCodeData);
};

const getPricingPostalCodes = async () => {
  return await pricingPostalCode
    .find()
    .populate("type_vehicle")
    .populate("title");
};

const getPricingPostalCodeById = async (id) => {
  return await pricingPostalCode.findById(id);
};

const updatePricingPostalCode = async (id, updateData) => {
  return await pricingPostalCode.findByIdAndUpdate(id, updateData, {
    new: true,
  });
};

const deletePricingPostalCode = async (id) => {
  return await pricingPostalCode.findByIdAndDelete(id);
};

module.exports = {
  createPricingPostalCode,
  getPricingPostalCodes,
  getPricingPostalCodeById,
  updatePricingPostalCode,
  deletePricingPostalCode,
};
