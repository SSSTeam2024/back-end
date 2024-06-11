const ShortCodeService = require("../../services/shortCodeServices/shortCodeServices");

const createShortCode = async (req, res) => {
  try {
    const { name, text } = req.body;
    const newShortCode = await ShortCodeService.createShortCode({ name, text });
    res.status(201).json(newShortCode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateShortCode = async (req, res) => {
  try {
    const ShortCodeId = req.params.id;
    const { list } = req.body;

    const updatedShortCode = await ShortCodeService.updateShortCode(
      ShortCodeId,
      {
        list,
      }
    );

    if (!updatedShortCode) {
      return res.status(404).send("Duty check not found");
    }
    res.json(updatedShortCode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteShortCode = async (req, res) => {
  try {
    const ShortCodeId = req.params.id;

    const deletedShortCode = await ShortCodeService.deleteShortCode(
      ShortCodeId
    );

    if (!deletedShortCode) {
      return res.status(404).send("Duty check not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getShortCodes = async (req, res) => {
  try {
    const ShortCodes = await ShortCodeService.getShortCodes();
    res.json(ShortCodes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createShortCode,
  updateShortCode,
  deleteShortCode,
  getShortCodes,
};
