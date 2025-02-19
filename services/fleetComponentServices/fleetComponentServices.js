const fleetComponentDao = require("../../dao/fleetComponentDao/fleetComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

const createFleet = async (fleetData, documents) => {
  if (documents.length === 0) {
    return await fleetComponentDao.createFleet(fleetData);
  } else {
    let saveResult = await saveDocumentsToServer(documents);
    return await fleetComponentDao.createFleet(fleetData);
  }
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    if (file.base64String !== "") {
      await saveFile(file.base64String, file.name, file.path);
      counter++;
      console.log("File number " + counter + " saved");
    }
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  await globalFunctions.ensureDirectoryExistence(file_path);
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const deleteFleet = async (id) => {
  return await fleetComponentDao.deleteFleet(id);
};

const getFleetById = async (updateData) => {
  return await fleetComponentDao.getFleetById(updateData);
};

const updateFleet = async (id, updateData) => {
  return await fleetComponentDao.updateFleet(id, updateData);
};

const getAllFleets = async () => {
  return await fleetComponentDao.getFleets();
};

module.exports = {
  getAllFleets,
  updateFleet,
  getFleetById,
  deleteFleet,
  createFleet,
};
