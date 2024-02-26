const sourceService = require('../../services/sourceServices/sourceService');

const createSource = async (req, res) => {
  try {
    const { name } = req.body;

    await sourceService.createSource({ name });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getSources = async (req, res) => {
  try {
    const sources = await sourceService.getSources();
    res.json(sources );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateSource = async (req, res) => {
  try {
    const sourceId = req.params.id;
    const { name } = req.body;

    const updatedSource = await sourceService.updateSource(sourceId, { name });

    if (!updatedSource) {
      return res.status(404).send('Source not found');
    }
    res.json(updatedSource);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteSource = async (req, res) => {
  try {
    const sourceId = req.params.id;

    const deletedSource = await sourceService.deleteSource(sourceId);

    if (!deletedSource) {
      return res.status(404).send('Source not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createSource,
  getSources,
  updateSource,
  deleteSource,
};
