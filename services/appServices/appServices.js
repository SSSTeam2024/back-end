const appDao = require("../../dao/appDao/appDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

async function saveMediaToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    // Skip invalid file entries
    if (!file.base64String || !file.name || !file.path) continue;

    await saveFile(file.base64String, file.name, file.path);
    counter++;
  }
  return counter === documents.length;
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

const createApp = async (appData, documents) => {
  let saveResult = await saveMediaToServer(documents);
  return await appDao.createApp(appData);
};

// const getNoteById = async (id) => {
//   return await appDao.getNoteById(id);
// };

const getApps = async () => {
  return await appDao.getApps();
};

const updateApp = async (id, updateData, documents) => {
  let saveResult = await saveMediaToServer(documents);
  return await appDao.updateApp(id, updateData);
};

const deleteApp = async (id) => {
  return await appDao.deleteApp(id);
};
// const getNotesByIdCompany = async (id_corporate) => {
//   return await appDao.getNotesByIdCompany(id_corporate);
// };
module.exports = {
  createApp,
  getApps,
  updateApp,
  deleteApp,
  //   getNoteById,
  //   getNotesByIdCompany,
};
