const FooterSocial = require("../../models/footerSocialModel/footerSocialModel");

const createFooterSocial = async (footerSocialData) => {
  return await FooterSocial.create(footerSocialData);
};

const getFooterSocials = async () => {
  return await FooterSocial.find();
};

const updateFooterSocial = async (id, updateData) => {
  return await FooterSocial.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteFooterSocial = async (id) => {
  return await FooterSocial.findByIdAndDelete(id);
};

module.exports = {
  createFooterSocial,
  getFooterSocials,
  updateFooterSocial,
  deleteFooterSocial,
};
