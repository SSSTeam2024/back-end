const ouValueComponentDao = require("../../dao/ouValueComponentDao/ouValueComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

const createOurValue = async (ourValueData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await ouValueComponentDao.createOurValue(ourValueData);
};

const getOurValue = async () => {
  return await ouValueComponentDao.getOurValue();
};

const updateOurValue = async (id, updateData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await ouValueComponentDao.updateOurValue(id, updateData);
};

const deleteOurValue = async (id) => {
  return await ouValueComponentDao.deleteOurValue(id);
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
    const directoryPath = path.join(__dirname, "files", "ourValue");
    const filePath = "files/ourValue/" + fileName;

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

const addTabToOurValue = async (valueId, tabData) => {
  const newTab = {
    title: tabData.title,
    display: tabData.display,
    content: tabData.content,
    buttonLabel: tabData.buttonLabel,
    buttonLink: tabData.buttonLink,
    buttonDisplay: tabData.buttonDisplay,
  };

  return await ouValueComponentDao.addTabToOurValue(valueId, newTab);
};

module.exports = {
  createOurValue,
  getOurValue,
  updateOurValue,
  deleteOurValue,
  addTabToOurValue,
};
