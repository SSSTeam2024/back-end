const FooterSocial = require("../../models/footerSocialModel/footerSocialModel");

const createFooterSocial = async (footerSocialData) => {
  return await FooterSocial.create(footerSocialData);
};

const getFooterSocials = async () => {
  return await FooterSocial.find();
};

const updateFooterSocial = async (id, updateData) => {
  const { termsAndConditions, privacyPolicy, siteName, socialLinks } =
    updateData;

  return await FooterSocial.findOneAndUpdate(
    {
      _id: id,
    },
    {
      $set: {
        termsAndConditions: termsAndConditions,
        privacyPolicy: privacyPolicy,
        siteName: siteName,
        socialLinks: socialLinks,
      },
    },
    { new: true }
  );
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
