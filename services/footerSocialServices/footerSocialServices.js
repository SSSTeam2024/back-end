const footerSocialDao = require("../../dao/footerSocialDao/footerSocialDao");

const createFooterSocial = async (footerSocialData) => {
  return await footerSocialDao.createFooterSocial(footerSocialData);
};

const getFooterSocials = async () => {
  return await footerSocialDao.getFooterSocials();
};

const updateFooterSocial = async (id, updateData) => {
  return await footerSocialDao.updateFooterSocial(id, updateData);
};

const deleteFooterSocial = async (id) => {
  return await footerSocialDao.deleteFooterSocial(id);
};

module.exports = {
  createFooterSocial,
  getFooterSocials,
  updateFooterSocial,
  deleteFooterSocial,
};
