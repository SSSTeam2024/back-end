const regionalPricingServices = require("../../services/regionalPricingServices/regionalPricingServices");

const addNewRegionalPricing = async (req, res) => {
  try {
    const { title, uplift, miles, location, type_vehicle } = req.body;

    const regionalPricing = await regionalPricingServices.createRegionalPricing(
      {
        title,
        uplift,
        miles,
        location,
        type_vehicle,
      }
    );
    res.json(regionalPricing);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateRegionalPricing = async (req, res) => {
  try {
    const regionalPricingId = req.params.id;
    const { title, uplift, miles, location, type_vehicle } = req.body;

    const updatedRegionalPricing =
      await regionalPricingServices.updateRegionalPricing(regionalPricingId, {
        title,
        uplift,
        miles,
        location,
        type_vehicle,
      });

    if (!updatedRegionalPricing) {
      return res.status(404).send("Regional Pricing not found!");
    }
    res.json(updatedRegionalPricing);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getRegionalPricingById = async (req, res) => {
  try {
    const regionalPricingId = req.params.id;

    const getRegionalPricing =
      await regionalPricingServices.getRegionalPricingById(regionalPricingId);

    if (!getRegionalPricing) {
      return res.status(404).send("Regional Pricing not found");
    }
    res.json(getRegionalPricing);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllRegionalPricings = async (req, res) => {
  try {
    const regionalPricings =
      await regionalPricingServices.getRegionalPricings();
    res.json(regionalPricings);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteRegionalPricing = async (req, res) => {
  try {
    const regionalPricingId = req.params.id;

    const deletedRegionalPricing =
      await regionalPricingServices.deleteRegionalPricing(regionalPricingId);

    if (!deletedRegionalPricing) {
      return res.status(404).send("Regional Pricing not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addNewRegionalPricing,
  updateRegionalPricing,
  getRegionalPricingById,
  getAllRegionalPricings,
  deleteRegionalPricing,
};
