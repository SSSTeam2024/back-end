const Affiliate = require('../models/affiliate');

const createAffiliate = async (affiliate) => {
  return await Affiliate.create(affiliate);
};

const getAffiliates = async () => {
  return await Affiliate.find();
};

const updateAffiliate = async (id, updateData) => {
  return await Affiliate.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteAffiliate = async (id) => {
  return await Affiliate.findByIdAndDelete(id);
};

module.exports = {
  createAffiliate,
  getAffiliates,
  updateAffiliate,
  deleteAffiliate,
};
