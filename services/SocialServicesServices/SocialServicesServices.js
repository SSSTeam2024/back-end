const socialServicesDao = require("../../dao/socialServicesDao/socialServicesDao");

const createSocialServices = async (SocialServicesData) => {
  return await socialServicesDao.createSocialServices(SocialServicesData);
};

const getSocialServices = async () => {
  return await socialServicesDao.getSocialServices();
};

const updateSocialServices = async (id, updateData) => {
  return await socialServicesDao.updateSocialServices(id, updateData);
};

const deleteSocialServices = async (id) => {
  return await socialServicesDao.deleteSocialServices(id);
};

module.exports = {
  createSocialServices,
  getSocialServices,
  updateSocialServices,
  deleteSocialServices,
};
