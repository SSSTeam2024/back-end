const inThePressComponentServices = require("../../services/inThePressComponentServices/inThePressComponentServices");
const globalFunctions = require("../../utils/globalFunctions");

const createInThePress = async (req, res) => {
  try {
    const {
      page,
      paragraph,
      title,
      news,
      display,
      order,
      typeComponent,
      newImage,
    } = req.body;

    const imagePath = "files/inThePressFiles/";
    const documents = [];
    const processedGrids = news.map((grid, index) => {
      if (newImage === "no") {
        return {
          ...grid,
          image: grid.image,
        };
      } else {
        const imageFilename = globalFunctions.generateUniqueFilename(
          grid.image_extension,
          `InThePress_${index}`
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
      paragraph,
      title,
      news: processedGrids,
      display,
      order,
      typeComponent,
    };

    const newInThePress = await inThePressComponentServices.createInThePress(
      fleetData,
      documents
    );

    res.status(201).json(newInThePress);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteInThePress = async (req, res) => {
  try {
    const fleetId = req.params.id;
    const deletedFleet = await inThePressComponentServices.deleteInThePress(
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

const updateInThePress = async (req, res) => {
  try {
    const inThePressId = req.params.id;
    const {
      page,
      paragraph,
      title,
      news,
      display,
      order,
      typeComponent,
      newImage,
    } = req.body;

    const updatedFleet = await inThePressComponentServices.updateInThePress(
      inThePressId,
      {
        page,
        paragraph,
        title,
        news,
        display,
        order,
        typeComponent,
        newImage,
      }
    );
    res.json({ success: updatedFleet });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getInThePressById = async (req, res) => {
  try {
    const fleetId = req.params.id;
    const getFleetById = await inThePressComponentServices.getInThePressById({
      fleetId,
    });
    res.json(getFleetById);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllInThePresss = async (req, res) => {
  try {
    const inThePress = await inThePressComponentServices.getAllInThePresss();
    res.json(inThePress);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllInThePresss,
  getInThePressById,
  updateInThePress,
  deleteInThePress,
  createInThePress,
};
