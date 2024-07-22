const requestFeatureDao = require("../../dao/requestFeature/requestFeature");
const globalFunctions = require("../../utils/globalFunctions");
const fs = require("fs");

const createRequestFeature = async (RequestFeatureData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);

  let latestRequestFeature = await requestFeatureDao.getLatestRequestFeature();

  let newRequestFeatureRef;
  if (!latestRequestFeature) {
    newRequestFeatureRef = "Feature-001";
  } else {
    let latestRefNumber = parseInt(latestRequestFeature.ref.split("-")[1], 10);
    let newRefNumber = latestRefNumber + 1;
    newRequestFeatureRef = `Feature-${newRefNumber
      .toString()
      .padStart(3, "0")}`;
  }

  return await requestFeatureDao.createRequestFeature({
    ...RequestFeatureData,
    ref: String(newRequestFeatureRef),
  });
};

async function saveDocumentsToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveFile(file.base64String, file.name, file.path);
    counter++;
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

const getRequestFeatures = async () => {
  return await requestFeatureDao.getRequestFeatures();
};

const getRequestFeatureById = async (id) => {
  return await requestFeatureDao.getRequestFeatureById(id);
};

const deleteRequestFeature = async (id) => {
  return await requestFeatureDao.deleteRequestFeature(id);
};

// const updateDefect = async (id, updateData) => {
//     return await defectDao.updateDefect(id, updateData);
//   };

const getAllRequestedFeaturesByCompanyID = async (id) => {
  return await requestFeatureDao.getAllRequestedFeaturesByCompanyID(id);
};

const getAllRequestedFeaturesBySchoolID = async (id) => {
  return await requestFeatureDao.getAllRequestedFeaturesBySchoolID(id);
};

module.exports = {
  createRequestFeature,
  getRequestFeatureById,
  getRequestFeatures,
  deleteRequestFeature,
  getAllRequestedFeaturesByCompanyID,
  getAllRequestedFeaturesBySchoolID,
};
