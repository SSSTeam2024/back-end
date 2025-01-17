const SocialServices = require("../../models/socialServicesModel/socialServicesModel");

const createSocialServices = async (SocialServicesData) => {
  return await SocialServices.create(SocialServicesData);
};

const getSocialServices = async () => {
  return await SocialServices.find();
};

const updateSocialServices = async (id, updateData) => {
  return await SocialServices.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteSocialServices = async (id) => {
  return await SocialServices.findByIdAndDelete(id);
};

module.exports = {
  createSocialServices,
  getSocialServices,
  updateSocialServices,
  deleteSocialServices,
};
