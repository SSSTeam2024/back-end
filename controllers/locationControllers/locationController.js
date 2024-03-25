const locationService = require("../../services/locationServices/locationServices");

const createLocation = async (req, res) => {
  try {
    const { start_point } = req.body;

    await locationService.createLocation({ start_point });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getLocations = async (req, res) => {
  try {
    const locations = await locationService.getLocations();
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getLocationById = async (req, res) => {
  try {
    const locationId = req.params.id;

    const getLocation = await locationService.getLocationById(locationId);

    if (!getLocation) {
      return res.status(404).send("Location not found");
    }
    res.json(getLocation);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateLocation = async (req, res) => {
  try {
    const locationId = req.params.id;
    const { start_point } = req.body;

    const updatedLocation = await locationService.updateLocation(locationId, {
      start_point,
    });

    if (!updatedLocation) {
      return res.status(404).send("Source not found");
    }
    res.json(updatedLocation);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteLocation = async (req, res) => {
  try {
    const locationId = req.params.id;

    const deletedLocation = await locationService.deleteLocation(locationId);

    if (!deletedLocation) {
      return res.status(404).send("Source not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createLocation,
  deleteLocation,
  updateLocation,
  getLocations,
  getLocationById,
};
