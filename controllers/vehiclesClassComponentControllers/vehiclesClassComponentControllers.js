const vehiclesClassComponentServices = require("../../services/vehiclesClassComponentServices/vehiclesClassComponentServices");

const createVehiclesClass = async (req, res) => {
  try {
    const { page, bigTitle, paragraph, vehicleTypes } = req.body;

    await vehiclesClassComponentServices.createVehiclesClass({
      page,
      bigTitle,
      paragraph,
      vehicleTypes,
    });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getVehiclesClass = async (req, res) => {
  try {
    const vehiclesClass =
      await vehiclesClassComponentServices.getVehiclesClass();
    res.json(vehiclesClass);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateVehiclesClass = async (req, res) => {
  try {
    const vehiclesClassId = req.params.id;
    const { page, bigTitle, paragraph, vehicleTypes } = req.body;

    const updatedVehiclesClass =
      await vehiclesClassComponentServices.updateVehiclesClass(
        vehiclesClassId,
        {
          page,
          bigTitle,
          paragraph,
          vehicleTypes,
        }
      );

    if (!updatedVehiclesClass) {
      return res.status(404).send("Vehicle Class not found");
    }
    res.json(updatedVehiclesClass);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteVehiclesClass = async (req, res) => {
  try {
    const vehicleClassdId = req.params.id;

    const deletedVehicleClass =
      await vehiclesClassComponentServices.deleteVehiclesClass(vehicleClassdId);

    if (!deletedVehicleClass) {
      return res.status(404).send("Vehicle Class not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createVehiclesClass,
  getVehiclesClass,
  updateVehiclesClass,
  deleteVehiclesClass,
};
