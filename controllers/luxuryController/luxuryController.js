const luxuryService = require('../../services/luxuryServices/luxuryService');

const createLuxury = async (req, res) => {
  try {
    const { name } = req.body;

    await luxuryService.createLuxury({ name });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getLuxurys = async (req, res) => {
  try {
    const luxurys = await luxuryService.getLuxurys();
    res.json(luxurys );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getLuxuryById = async (req, res) => {
  try {
    const luxuryId = req.params.id;

    const getLuxury = await luxuryService.getLuxuryById(luxuryId);

    if (!getLuxury) {
      return res.status(404).send("Luxury not found");
    }
    res.json(getLuxury);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateLuxury = async (req, res) => {
  try {
    const luxuryId = req.params.id;
    const { name } = req.body;

    const updatedLuxury = await luxuryService.updateLuxury(luxuryId, { name });

    if (!updatedLuxury) {
      return res.status(404).send('Luxury not found');
    }
    res.json(updatedLuxury);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteLuxury = async (req, res) => {
  try {
    const luxuryId = req.params.id;

    const deletedLuxury = await luxuryService.deleteLuxury(luxuryId);

    if (!deletedLuxury) {
      return res.status(404).send('Email Template not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createLuxury,
  getLuxurys,
  getLuxuryById,
  updateLuxury,
  deleteLuxury,
};
