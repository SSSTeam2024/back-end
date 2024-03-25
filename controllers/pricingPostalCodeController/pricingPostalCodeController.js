const pricingPostalCodeServices = require("../../services/pricingPostalCodeServices/pricingPostalCodeServices");

const addNewPricingPostalCode = async (req, res) => {
  try {
    const { title, uplift, miles, postal_code, type_vehicle } = req.body;

    const pricingPostalCode =
      await pricingPostalCodeServices.createPricingPostalCode({
        title,
        uplift,
        miles,
        postal_code,
        type_vehicle,
      });
    res.json(pricingPostalCode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updatePricingPostalCode = async (req, res) => {
  try {
    const pricingPostalCodeId = req.params.id;
    const { title, uplift, miles, postal_code, type_vehicle } = req.body;

    const updatedPricingPostalCode =
      await pricingPostalCodeServices.updatePricingPostalCode(
        pricingPostalCodeId,
        {
          title,
          uplift,
          miles,
          postal_code,
          type_vehicle,
        }
      );

    if (!updatedPricingPostalCode) {
      return res.status(404).send("Pricing Postal Code not found!");
    }
    res.json(updatedPricingPostalCode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getPricingPostalCodeById = async (req, res) => {
  try {
    const pricingPostalCodeId = req.params.id;

    const getPricingPostalCode =
      await pricingPostalCodeServices.getPricingPostalCodeById(
        pricingPostalCodeId
      );

    if (!getPricingPostalCode) {
      return res.status(404).send("Pricing Postal Code not found");
    }
    res.json(getPricingPostalCode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllPricingPostalCodes = async (req, res) => {
  try {
    const pricingPostalCodes =
      await pricingPostalCodeServices.getPricingPostalCodes();
    res.json(pricingPostalCodes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deletePricingPostalCode = async (req, res) => {
  try {
    const pricingPostalCodeId = req.params.id;

    const deletedPricingPostalCode =
      await pricingPostalCodeServices.deletePricingPostalCode(
        pricingPostalCodeId
      );

    if (!deletedPricingPostalCode) {
      return res.status(404).send("Pricing Postal Code not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addNewPricingPostalCode,
  updatePricingPostalCode,
  getPricingPostalCodeById,
  getAllPricingPostalCodes,
  deletePricingPostalCode,
};
