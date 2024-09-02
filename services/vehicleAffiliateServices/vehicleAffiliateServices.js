const vehicleAffiliateDao = require("../../dao/vehicleAffiliateDao/vehicleAffiliateDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

const createVehicleAffiliate = async (vehicleAffiliateData, documents) => {
  let saveResult = await saveFilesToServer(documents);
  console.log(saveResult);
  return await vehicleAffiliateDao.createVehicleAffiliate(vehicleAffiliateData);
};

async function saveFilesToServer(documents) {
  let counter = 0;
  for (const file of documents) {
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

const getVehicleAffiliateById = async (id) => {
  return await vehicleAffiliateDao.getVehicleAffiliateById(id);
};

const getAffiliateVehicles = async (id) => {
  return await vehicleAffiliateDao.getVehiclesAffiliate(id);
};

const updateVehicleAffiliate = async (id, updateData, documents) => {
  let saveResult = await saveFilesToServer(documents);
  return await vehicleAffiliateDao.updateVehicleAffiliate(id, updateData);
};

const deleteVehicleAffiliate = async (id) => {
  return await vehicleAffiliateDao.deleteVehicleAffiliate(id);
};

module.exports = {
  deleteVehicleAffiliate,
  updateVehicleAffiliate,
  getAffiliateVehicles,
  getVehicleAffiliateById,
  createVehicleAffiliate,
};
