const waitingBandService = require('../../services/waitingBandServices/waitingBandService');

const createWaitingBand = async (req, res) => {
  try {
    const { vehicle_type, hours_limit, price } = req.body;

    await waitingBandService.createWaitingBand({ vehicle_type, hours_limit, price });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getWaitingBands = async (req, res) => {
  try {
    const waitingBands = await waitingBandService.getWaitingBands();
    res.json( waitingBands );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateWaitingBand = async (req, res) => {
  try {
    const waitingBandId = req.params.id;
    const { vehicle_type, hours_limit, price } = req.body;

    const updatedWaitingBand = await waitingBandService.updateWaitingBand(waitingBandId, { vehicle_type, hours_limit, price });

    if (!updatedWaitingBand) {
      return res.status(404).send('Waiting Band not found');
    }
    res.json(updatedWaitingBand);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteWaitingBand = async (req, res) => {
  try {
    const waitingBandId = req.params.id;

    const deletedWaitingBand = await waitingBandService.deleteWaitingBand(waitingBandId);

    if (!deletedWaitingBand) {
      return res.status(404).send('Waiting Band not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createWaitingBand,
  getWaitingBands,
  updateWaitingBand,
  deleteWaitingBand,
};
