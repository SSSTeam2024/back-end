const RegionalPricing = require("../../models/regionalPricingModel/regionalPricingModel");

const createRegionalPricing = async (regionalPricingData) => {
  return await RegionalPricing.create(regionalPricingData);
};

const getRegionalPricings = async () => {
  return await RegionalPricing.find()
    .populate("type_vehicle")
    .populate("location");
};

const getRegionalPricingById = async (id) => {
  return await RegionalPricing.findById(id);
};

const updateRegionalPricing = async (id, updateData) => {
  return await RegionalPricing.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteRegionalPricing = async (id) => {
  return await RegionalPricing.findByIdAndDelete(id);
};

module.exports = {
  deleteRegionalPricing,
  updateRegionalPricing,
  getRegionalPricingById,
  getRegionalPricings,
  createRegionalPricing,
};
