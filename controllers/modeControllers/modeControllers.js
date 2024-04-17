const modeService = require("../../services/modeServices/modeService");

const createMode = async (req, res) => {
  try {
    const { type } = req.body;
    const newMode = await modeService.createMode({ type });
    res.status(201).json(newMode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateMode = async (req, res) => {
  try {
    const journeyId = req.params.id;
    const { type } = req.body;

    const updatedMode = await modeService.updateMode(journeyId, {
      type,
    });

    if (!updatedMode) {
      return res.status(404).send("Journey not found");
    }
    res.json(updatedMode);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteMode = async (req, res) => {
  try {
    const journeyId = req.params.id;

    const deletedMode = await modeService.deleteMode(journeyId);

    if (!deletedMode) {
      return res.status(404).send("Journey not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getModes = async (req, res) => {
  try {
    const modes = await modeService.getModes();
    res.json(modes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createMode,
  getModes,
  deleteMode,
  updateMode,
};
