const mileageBandService = require('../../services/mileageBandServices/mileageBandService');

const createMileageBand = async (req, res) => {
  try {
    const { vehicle_type, mileage_limit, price } = req.body;

    await mileageBandService.createMileageBand({ vehicle_type, mileage_limit, price });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getMileageBands = async (req, res) => {
  try {
    const mileageBands = await mileageBandService.getMileageBands();
    res.json( mileageBands );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateMileageBand = async (req, res) => {
  try {
    const mileageBandId = req.params.id;
    const { vehicle_type, mileage_limit, price } = req.body;

    const updatedMileageBand = await mileageBandService.updateMileageBand(mileageBandId, { vehicle_type, mileage_limit, price });

    if (!updatedMileageBand) {
      return res.status(404).send('Mileage Band not found');
    }
    res.json(updatedMileageBand);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteMileageBand = async (req, res) => {
  try {
    const mileageBandId = req.params.id;

    const deletedMileageBand = await mileageBandService.deleteMileageBand(mileageBandId);

    if (!deletedMileageBand) {
      return res.status(404).send('Mileage Band not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createMileageBand,
  getMileageBands,
  updateMileageBand,
  deleteMileageBand,
};
