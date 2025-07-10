const offerServices = require("../../services/offerServices/offerServices");

const createOffer = async (req, res) => {
  try {
    const {
      name,
      school_id,
      company_id,
      contract_id,
      vehicle_id,
      driver_id,
      pick_up,
      destination,
      cost,
      offer_number,
    } = req.body;

    const offerData = {
      name,
      school_id,
      company_id,
      contract_id,
      vehicle_id,
      driver_id,
      pick_up,
      destination,
      cost,
      offer_number,
    };

    const newOffer = await offerServices.createOffer(offerData);

    res.status(201).json(newOffer);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateOffer = async (req, res) => {
  try {
    const offerId = req.params.id;
    const {
      name,
      school_id,
      company_id,
      contract_id,
      vehicle_id,
      driver_id,
      pick_up,
      destination,
      cost,
      offer_number,
    } = req.body;

    const offerData = {
      name,
      school_id,
      company_id,
      contract_id,
      vehicle_id,
      driver_id,
      pick_up,
      destination,
      cost,
      offer_number,
    };

    const updatedOffer = await offerServices.updateOffer(offerId, offerData);
    res.json(updatedOffer);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteOffer = async (req, res) => {
  try {
    const offerId = req.params.id;

    const deletedOffer = await offerServices.deleteOffer(offerId);

    if (!deletedOffer) {
      return res.status(404).send("Offer not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getOffers = async (req, res) => {
  try {
    const offers = await offerServices.getOffers();
    res.json(offers);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createOffer,
  updateOffer,
  deleteOffer,
  getOffers,
};
