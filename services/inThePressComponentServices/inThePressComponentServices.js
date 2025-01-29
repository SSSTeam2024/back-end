const inThePressComponentDao = require("../../dao/inThePressComponentDao/inThePressComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

const createInThePress = async (inThePressData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);
  return await inThePressComponentDao.createInThePress(inThePressData);
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

const deleteInThePress = async (id) => {
  return await inThePressComponentDao.deleteInThePress(id);
};

const getInThePressById = async (updateData) => {
  return await inThePressComponentDao.getInThePress(updateData);
};

const updateInThePress = async (updateData) => {
  return await inThePressComponentDao.updateInThePress(updateData);
};

const getAllInThePresss = async () => {
  return await inThePressComponentDao.getInThePress();
};

module.exports = {
  getAllInThePresss,
  updateInThePress,
  getInThePressById,
  deleteInThePress,
  createInThePress,
};
