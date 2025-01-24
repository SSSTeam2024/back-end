const vehicleGuideComponentDao = require("../../dao/vehicleGuideComponentDao/vehicleGuideComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

const createVehicleGuide = async (vehicleGuideData, documents) => {
  let saveResult = await saveDocumentToServer(documents);

  if (saveResult) {
    return await vehicleGuideComponentDao.createVehicleGuide(vehicleGuideData);
  } else {
    throw new Error("Failed to save documents to the server.");
  }
};

const getVehicleGuides = async () => {
  return await vehicleGuideComponentDao.getVehicleGuide();
};

const updateVehicleGuide = async (id, updateData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await vehicleGuideComponentDao.updateVehicleGuide(id, updateData);
};

const deleteVehicleGuide = async (id) => {
  return await vehicleGuideComponentDao.deleteVehicleGuide(id);
};

async function saveDocumentToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveAdministrativeFile(file.base64String, file.name);
    counter++;
  }
  if (counter == documents.length) return true;
}

async function saveAdministrativeFile(base64String, fileName) {
  if (base64String != undefined) {
    const binaryData = Buffer.from(base64String, "base64");
    const directoryPath = path.join(__dirname, "files", "VehicleGuide");
    const filePath = "files/VehicleGuide/" + fileName;

    await globalFunctions.ensureDirectoryExistence(directoryPath);

    fs.writeFile(filePath, binaryData, "binary", (err) => {
      if (err) {
        console.error("Error saving the file:", err);
      } else {
        console.log("File saved successfully!");
      }
    });
  }
}

const addTabToVehicleGuide = async (valueId, tabData, documents) => {
  let saveResult = await saveDocumentToServer(documents);

  const newTab = {
    title: tabData.title,
    display: tabData.display,
    content: tabData.content,
    image: tabData.image,
  };

  return await vehicleGuideComponentDao.addTabToVehicleGuide(valueId, newTab);
};

const getVehicleGuideById = async (id) => {
  return await vehicleGuideComponentDao.getVehicleGuideById(id);
};

module.exports = {
  createVehicleGuide,
  getVehicleGuides,
  updateVehicleGuide,
  deleteVehicleGuide,
  addTabToVehicleGuide,
  getVehicleGuideById,
};
