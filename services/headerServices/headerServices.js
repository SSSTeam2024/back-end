const headerDao = require("../../dao/headerDao/headerDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

const createHeader = async (HeaderData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await headerDao.createHeader(HeaderData);
};

const getHeaders = async () => {
  return await headerDao.getHeaders();
};

const updateHeader = async (id, updateData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await headerDao.updateHeader(id, updateData);
};

const deleteHeader = async (id) => {
  return await headerDao.deleteHeader(id);
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
    const directoryPath = path.join(__dirname, "files", "header");
    const filePath = "files/header/" + fileName;

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
  createHeader,
  getHeaders,
  updateHeader,
  deleteHeader,
};
