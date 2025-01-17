const SocialServicesServices = require("../../services/SocialServicesServices/SocialServicesServices");

const createSocialServices = async (req, res) => {
  try {
    const [{ pageLink, display, cards, littleTitle, bigTitle }] = req.body;

    await SocialServicesServices.createSocialServices([
      { pageLink, display, cards, littleTitle, bigTitle },
    ]);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getSocialServices = async (req, res) => {
  try {
    const SocialServicess = await SocialServicesServices.getSocialServices();
    res.json(SocialServicess);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateSocialServices = async (req, res) => {
  try {
    const SocialServicesId = req.params.id;
    const { name } = req.body;

    const updatedSocialServices =
      await SocialServicesServices.updateSocialServices(SocialServicesId, {
        name,
      });

    if (!updatedSocialServices) {
      return res.status(404).send("SocialServices not found");
    }
    res.json(updatedSocialServices);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteSocialServices = async (req, res) => {
  try {
    const SocialServicesId = req.params.id;

    const deletedSocialServices =
      await SocialServicesServices.deleteSocialServices(SocialServicesId);

    if (!deletedSocialServices) {
      return res.status(404).send("SocialServices not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createSocialServices,
  getSocialServices,
  updateSocialServices,
  deleteSocialServices,
};
