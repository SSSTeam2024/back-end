const fleetComponentServices = require("../../services/fleetComponentServices/fleetComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createFleet = async (req, res) => {
  try {
    const { page, grids, display, order, typeComponent, newImage } = req.body;

    const imagePath = "files/fleetFiles/";
    const documents = [];
    const processedGrids = grids.map((grid, index) => {
      if (newImage === "no") {
        return {
          ...grid,
          image: grid.image,
        };
      } else {
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
      }
    });

    const fleetData = {
      page,
      grids: processedGrids,
      display,
      order,
      typeComponent,
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
  const fleetId = req.params.id;
  try {
    const existingFleet = await fleetComponentServices.getFleetById(fleetId);
    let documents = [];
    const { page, grids, display, order, typeComponent } = req.body;

    const processedGrids = existingFleet.grids.map((existingGrid) => {
      const updatedGrid = grids?.find(
        (grid) => grid.title === existingGrid.title
      );

      if (updatedGrid) {
        const updatedImage = updatedGrid.image_base64
          ? globalFunctions.generateUniqueFilename(
              updatedGrid.image_extension,
              `CardImage_${existingGrid.title}`
            )
          : existingGrid.image;

        if (updatedGrid.image_base64) {
          documents.push({
            base64String: updatedGrid.image_base64,
            extension: updatedGrid.image_extension,
            name: updatedImage,
          });
        }

        return {
          ...existingGrid.toObject(),
          content: updatedGrid.content || existingGrid.content,
          icon: updatedGrid.icon || existingGrid.icon,
          image: updatedImage,
        };
      }

      return existingGrid.toObject();
    });

    const fleetData = {
      page,
      grids: processedGrids,
      display,
      order,
      typeComponent,
    };

    const updatedFleet = await fleetComponentServices.updateFleet(
      fleetId,
      fleetData,
      documents
    );
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
