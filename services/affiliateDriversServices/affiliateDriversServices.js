const driverAffiliateDao = require("../../dao/driverAffiliateDao/driverAffiliateDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

const createDriverAffiliate = async (driverAffiliateData, documents) => {
  console.log(driverAffiliateData);
  console.log(documents);
  let saveResult = await saveFilesToServer(documents);
  console.log(saveResult);
  return await driverAffiliateDao.createDriverAffiliate(driverAffiliateData);
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

const updateAffiliateDriver = async (id, updateData, documents) => {
  let saveResult = await saveFilesToServer(documents);
  return await driverAffiliateDao.updateAffiliateDriver(id, updateData);
};

const getAffiliateDriverById = async (id) => {
  return await driverAffiliateDao.getAffiliateDriverById(id);
};

const getAffiliateDrivers = async (id) => {
  return await driverAffiliateDao.getAffiliateDrivers(id);
};

const deleteAffiliateDriver = async (id) => {
  return await driverAffiliateDao.deleteAffiliateDriver(id);
};

const getAffiliateDriverByEmail = async (email) => {
  return await driverAffiliateDao.getAffiliateDriverByEmail(email);
};

module.exports = {
  createDriverAffiliate,
  updateAffiliateDriver,
  getAffiliateDriverById,
  getAffiliateDrivers,
  deleteAffiliateDriver,
  getAffiliateDriverByEmail,
};
