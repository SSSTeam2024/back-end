const hourlyBandService = require('../../services/hourlyBandServices/hourlyBandService');

const createHourlyBand = async (req, res) => {
  try {
    const { vehicle_type, hours_limit, price } = req.body;

    await hourlyBandService.createHourlyBand({ vehicle_type, hours_limit, price });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getHourlyBands = async (req, res) => {
  try {
    const hourlyBands = await hourlyBandService.getHourlyBands();
    res.json(hourlyBands );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateHourlyBand = async (req, res) => {
  try {
    const hourlyBandId = req.params.id;
    const { vehicle_type, hours_limit, price } = req.body;

    const updatedHourlyBand = await hourlyBandService.updateHourlyBand(hourlyBandId, { vehicle_type, hours_limit, price });

    if (!updatedHourlyBand) {
      return res.status(404).send('Hourly Band not found');
    }
    res.json(updatedHourlyBand);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteHourlyBand = async (req, res) => {
  try {
    const hourlyBandId = req.params.id;

    const deletedHourlyBand = await hourlyBandService.deleteHourlyBand(hourlyBandId);

    if (!deletedHourlyBand) {
      return res.status(404).send('Hourly Band not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createHourlyBand,
  getHourlyBands,
  updateHourlyBand,
  deleteHourlyBand,
};
