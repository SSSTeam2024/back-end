const driverAffiliateDao = require("../../dao/driverAffiliateDao/driverAffiliateDao");
const fs = require("fs");


const createDriverAffiliate = async (driverAffiliateData, documents) => {
    console.log(driverAffiliateData);
    console.log(documents);
    let saveResult = await saveFilesToServer(documents);
    console.log(saveResult);
  return await driverAffiliateDao.createDriverAffiliate(driverAffiliateData);
};

async function saveFilesToServer(documents) {
  let counter = 0;
    for (const file of documents){
      console.log(file);
        await saveFile(file.base64String, file.name, file.path);
        counter++;
        console.log('File number '+counter+' saved');
    }
    if(counter == documents.length) return true;
}

async function saveFile(base64String, fileName, file_path) {
 // const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const updateAffiliateDriver = async (id, updateData) => {
  return await driverAffiliateDao.updateAffiliateDriver(id, updateData);
};

const getAffiliateDriverById = async (id) => {
  return await driverAffiliateDao.getAffiliateDriverById(id);
};

const getAffiliateDrivers = async () => {
  return await driverAffiliateDao.getAffiliateDrivers();
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