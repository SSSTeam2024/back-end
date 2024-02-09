const stopService = require('../../services/stopServices/stopService');

const createStop = async (req, res) => {
  try {
    const { name, lat, long } = req.body;

    await stopService.createStop({ name, lat, long });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteStop = async (req, res) => {
  try {
    const stopId = req.params.id;

    const deletedStop = await stopService.deleteStop(stopId);

    if (!deletedStop) {
      return res.status(404).send('Stop not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createStop,
  deleteStop,
};
