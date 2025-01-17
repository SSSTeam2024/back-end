const footerSocialServices = require("../../services/footerSocialServices/footerSocialServices");

const createFooterSocial = async (req, res) => {
  try {
    const {
      termsAndConditions,
      privacyPolicy,
      siteName,
      socialLinks,
      footerBackgroundColor,
    } = req.body;

    await footerSocialServices.createFooterSocial({
      termsAndConditions,
      privacyPolicy,
      siteName,
      socialLinks,
      footerBackgroundColor,
    });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFooterSocials = async (req, res) => {
  try {
    const FooterSocials = await footerSocialServices.getFooterSocials();
    res.json(FooterSocials);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateFooterSocial = async (req, res) => {
  try {
    const footerSocialId = req.params.id;
    const {
      termsAndConditions,
      privacyPolicy,
      siteName,
      socialLinks,
      footerBackgroundColor,
    } = req.body;

    const updatedFooterSocial = await footerSocialServices.updateFooterSocial(
      footerSocialId,
      {
        termsAndConditions,
        privacyPolicy,
        siteName,
        socialLinks,
        footerBackgroundColor,
      }
    );

    if (!updatedFooterSocial) {
      return res.status(404).send("Footer Social not found");
    }
    res.json(updatedFooterSocial);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteFooterSocial = async (req, res) => {
  try {
    const footerSocialId = req.params.id;

    const deleteFooterSocial = await footerSocialServices.deleteFooterSocial(
      footerSocialId
    );

    if (!deleteFooterSocial) {
      return res.status(404).send("Footer Social not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createFooterSocial,
  getFooterSocials,
  updateFooterSocial,
  deleteFooterSocial,
};
