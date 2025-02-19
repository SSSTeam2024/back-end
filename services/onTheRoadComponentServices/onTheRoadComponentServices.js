const onTheRoadComponentDao = require("../../dao/onTheRoadComponentDao/onTheRoadComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

const createOnTheRoad = async (onTheRoadData, documents) => {
  if (documents.length === 0) {
    return await onTheRoadComponentDao.createOnTheRoad(onTheRoadData);
  } else {
    let saveResult = await saveDocumentsToServer(documents);
    return await onTheRoadComponentDao.createOnTheRoad(onTheRoadData);
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

const deleteOnTheRoad = async (id) => {
  return await onTheRoadComponentDao.deleteOnTheRoad(id);
};

const getOnTheRoadById = async (id) => {
  return await onTheRoadComponentDao.getOnTheRoadById(id);
};

const updateOnTheRoad = async (id, updateData) => {
  return await onTheRoadComponentDao.updateOnTheRoad(id, updateData);
};

const getOnTheRoads = async () => {
  return await onTheRoadComponentDao.getOnTheRoads();
};

module.exports = {
  getOnTheRoads,
  updateOnTheRoad,
  getOnTheRoadById,
  deleteOnTheRoad,
  createOnTheRoad,
};
