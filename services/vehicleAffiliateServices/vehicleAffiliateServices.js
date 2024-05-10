const vehicleAffiliateDao = require("../../dao/vehicleAffiliateDao/vehicleAffiliateDao");
const fs = require('fs');

const createVehicleAffiliate = async (vehicleAffiliateData, documents) => {
    console.log(vehicleAffiliateData);
    console.log(documents);
    let saveResult = await saveFilesToServer(documents);
    console.log(saveResult);
  return await vehicleAffiliateDao.createVehicleAffiliate(vehicleAffiliateData);
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

const getVehicleAffiliateById = async (id) => {
  return await vehicleAffiliateDao.getVehicleAffiliateById(id);
}

const getAffiliateVehicles = async () => {
  return await vehicleAffiliateDao.getVehiclesAffiliate();
};

const updateVehicleAffiliate= async (id, updateData) => {
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