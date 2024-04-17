const checkTypeService = require("../../services/checkTypeServices/checkTypeServices");
const globalFunctions = require("../../utils/globalFunctions");

const createCheckType = async (req, res) => {
  try {
    const { type, duration,checkType_image_extension, checkType_image_base64_string } = req.body;
    const chechTypeFilesPath = "files/checkTypeFiles/";
    let checkType_images = globalFunctions.generateUniqueFilename(
      checkType_image_extension,
      "checkTypeImage"
    );

    let documents = [
      {
        base64String: checkType_image_base64_string,
        extension: checkType_image_extension,
        name: type.checkType_images,
        path: chechTypeFilesPath,
      }
    ];

    const newCheckType = await checkTypeService.createCheckType({ type, duration }, documents);
    res.status(201).json(newCheckType);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateCheckType = async (req, res) => {
  try {
    const checkTypeId = req.params.id;
    const { type, duration } = req.body;

    const updatedCheckType = await checkTypeService.updateCheckType(checkTypeId, {
      type, duration
    });

    if (!updatedCheckType) {
      return res.status(404).send("Duty check not found");
    }
    res.json(updatedCheckType);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteCheckType = async (req, res) => {
  try {
    const checkTypeId = req.params.id;

    const deletedCheckType = await checkTypeService.deleteCheckType(checkTypeId);

    if (!deletedCheckType) {
      return res.status(404).send("Duty check not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getCheckTypes = async (req, res) => {
  try {
    const checkTypes = await checkTypeService.getCheckTypes();
    res.json(checkTypes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  deleteCheckType,
  updateCheckType,
  createCheckType,
  getCheckTypes,
};
