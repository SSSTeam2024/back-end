const forceSingleService = require("../../services/forceSingleServices/forceSingleServices");

const createForceSingle = async (req, res) => {
  try {
    const { car, miles, hours_wait, percentage } = req.body;
    const newForceSingle = await forceSingleService.createForceSingle({
      car,
      miles,
      hours_wait,
      percentage,
    });
    res.status(201).json(newForceSingle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateForceSingle = async (req, res) => {
  try {
    const forceSingleId = req.params.id;
    const { car, miles, hours_wait, percentage } = req.body;

    const updatedForceSingle = await forceSingleService.updateForceSingle(
      forceSingleId,
      { car, miles, hours_wait, percentage }
    );

    if (!updatedForceSingle) {
      return res.status(404).send("Force Single not found");
    }
    res.json(updatedForceSingle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteForceSingle = async (req, res) => {
  try {
    const forceSingleId = req.params.id;

    const deletedForceSingle = await forceSingleService.deleteForceSingle(
      forceSingleId
    );

    if (!deletedForceSingle) {
      return res.status(404).send("Force Single not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getForceSingles = async (req, res) => {
  try {
    const forceSingles = await forceSingleService.getForceSingles();
    res.json(forceSingles);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getForceSingles,
  deleteForceSingle,
  updateForceSingle,
  createForceSingle,
};
