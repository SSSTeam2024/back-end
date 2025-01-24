const onTheRoadComponentServices = require("../../services/onTheRoadComponentServices/onTheRoadComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createOnTheRoad = async (req, res) => {
  try {
    const { page, bigTitle, paragraph, grids } = req.body;

    const imagePath = "files/onTheRoadFiles/";
    const documents = [];
    const processedGrids = grids.map((grid, index) => {
      const imageFilename = globalFunctions.generateUniqueFilename(
        grid.image_extension,
        `${grid.title}_${index}`
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
      bigTitle,
      paragraph,
      grids: processedGrids,
    };

    const newFleet = await onTheRoadComponentServices.createOnTheRoad(
      fleetData,
      documents
    );

    res.status(201).json(newFleet);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteOnTheRoad = async (req, res) => {
  try {
    const fleetId = req.params.id;
    const deletedFleet = await onTheRoadComponentServices.deleteOnTheRoad(
      fleetId
    );

    if (!deletedFleet) {
      return res.status(404).send("Fleet not found");
    }
    res.json({ msg: "Fleet deleted!" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateOnTheRoad = async (req, res) => {
  try {
    const { page, bigTitle, paragraph, grids } = req.body;
    const updatedFleet = await onTheRoadComponentServices.updateOnTheRoad({
      page,
      bigTitle,
      paragraph,
      grids,
    });
    res.json({ success: updatedFleet });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getOnTheRoadById = async (req, res) => {
  try {
    const fleetId = req.params.id;
    const getFleetById = await onTheRoadComponentServices.getOnTheRoadById({
      fleetId,
    });
    res.json(getFleetById);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getOnTheRoads = async (req, res) => {
  try {
    const fleets = await onTheRoadComponentServices.getOnTheRoads();
    res.json(fleets);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getOnTheRoads,
  getOnTheRoadById,
  updateOnTheRoad,
  deleteOnTheRoad,
  createOnTheRoad,
};
