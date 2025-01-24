const fleetComponentServices = require("../../services/fleetComponentServices/fleetComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createFleet = async (req, res) => {
  try {
    const { page, grids } = req.body;

    const imagePath = "files/fleetFiles/";
    const documents = [];
    const processedGrids = grids.map((grid, index) => {
      const imageFilename = globalFunctions.generateUniqueFilename(
        grid.image_extension,
        `Fleet_${index}`
      );

      documents.push({
        base64String: grid.image_base64,
        name: imageFilename,
        path: imagePath,
      });

      return {
        ...grid,
        image: imageFilename,
      };
    });

    const fleetData = {
      page,
      grids: processedGrids,
    };

    const newFleet = await fleetComponentServices.createFleet(
      fleetData,
      documents
    );

    res.status(201).json(newFleet);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteFleetById = async (req, res) => {
  try {
    const fleetId = req.params.id;
    const deletedFleet = await fleetComponentServices.deleteFleet(fleetId);

    if (!deletedFleet) {
      return res.status(404).send("Fleet not found");
    }
    res.json({ msg: "Fleet deleted!" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateFleet = async (req, res) => {
  try {
    const { page, grids } = req.body;
    const updatedFleet = await fleetComponentServices.updateFleet({
      page,
      grids,
    });
    res.json({ success: updatedFleet });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFleetById = async (req, res) => {
  try {
    const fleetId = req.params.id;
    const getFleetById = await fleetComponentServices.getFleetById({
      fleetId,
    });
    res.json(getFleetById);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllFleets = async (req, res) => {
  try {
    const fleets = await fleetComponentServices.getAllFleets();
    res.json(fleets);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFleets,
  getFleetById,
  updateFleet,
  deleteFleetById,
  createFleet,
};
