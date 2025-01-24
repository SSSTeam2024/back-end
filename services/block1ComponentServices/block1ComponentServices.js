const servicesBlock1ComponentDao = require("../../dao/servicesBlock1ComponentDao/servicesBlock1ComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

const createBlock1 = async (block1Data, documents) => {
  let saveResult = await saveDocumentToServer(documents);

  if (saveResult) {
    return await servicesBlock1ComponentDao.createBlock1(block1Data);
  } else {
    throw new Error("Failed to save documents to the server.");
  }
};

const getBlock1 = async () => {
  return await servicesBlock1ComponentDao.getBlock1();
};

const updateBlock1 = async (id, updateData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await servicesBlock1ComponentDao.updateBlock1(id, updateData);
};

const deleteBlock1 = async (id) => {
  return await servicesBlock1ComponentDao.deleteBlock1(id);
};

async function saveDocumentToServer(documents) {
  let counter = 0;
  for (const file of documents) {
    await saveAdministrativeFile(file.base64String, file.name);
    counter++;
  }
  if (counter == documents.length) return true;
}

async function saveAdministrativeFile(base64String, fileName) {
  if (base64String != undefined) {
    const binaryData = Buffer.from(base64String, "base64");
    const directoryPath = path.join(__dirname, "files", "Block1");
    const filePath = "files/Block1/" + fileName;

    await globalFunctions.ensureDirectoryExistence(directoryPath);

    fs.writeFile(filePath, binaryData, "binary", (err) => {
      if (err) {
        console.error("Error saving the file:", err);
      } else {
        console.log("File saved successfully!");
      }
    });
  }
}

module.exports = {
  createBlock1,
  getBlock1,
  updateBlock1,
  deleteBlock1,
};
