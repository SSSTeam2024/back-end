const vehicleDao = require("../../dao/vehicleDao/vehicleDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

const createVehicle = async (vehicleData, documents) => {
  console.log(vehicleData);
  console.log(documents);
  let saveResult = await saveFilesToServer(documents);
  console.log(saveResult);
  return await vehicleDao.createVehicle(vehicleData);
};

async function saveFilesToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    console.log(file);
    await saveFile(file.base64String, file.name, file.path);
    counter++;
    console.log("File number " + counter + " saved");
  }
  if (counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
  if (base64String != undefined) {
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
}

const getVehicleById = async (id) => {
  return await vehicleDao.getVehicleById(id);
};

const getVehicles = async () => {
  return await vehicleDao.getVehicles();
};

const updateVehicle = async (id, updateData, documents) => {
  let saveResult = await saveFilesToServer(documents);
  return await vehicleDao.updateVehicle(id, updateData);
};

const deleteVehicle = async (id) => {
  return await vehicleDao.deleteVehicle(id);
};

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
