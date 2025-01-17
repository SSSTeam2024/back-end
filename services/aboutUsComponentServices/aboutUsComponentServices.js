const aboutUsComponentDao = require("../../dao/aboutUsComponentDao/aboutUsComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

const createAboutUs = async (aboutUsData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await aboutUsComponentDao.createAboutUs(aboutUsData);
};

const getAboutUs = async () => {
  return await aboutUsComponentDao.getAboutUs();
};

const updateAboutUs = async (id, updateData, documents) => {
  try {
    let saveResult = await saveDocumentToServer(documents);
    return await aboutUsComponentDao.updateAboutUs(id, updateData);
  } catch (error) {
    console.error("Service Error:", error);
    throw new Error("Failed to update About Us");
  }
};

const deleteAboutUs = async (id) => {
  return await aboutUsComponentDao.deleteAboutUs(id);
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
    const directoryPath = path.join(__dirname, "files", "aboutUs");
    const filePath = "files/aboutUs/" + fileName;

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

const getAboutUsById = async (id) => {
  try {
    return await aboutUsComponentDao.getAboutUsById(id);
  } catch (error) {
    console.error("Service Error:", error);
    throw new Error("Failed to retrieve About Us");
  }
};

module.exports = {
  createAboutUs,
  getAboutUs,
  updateAboutUs,
  deleteAboutUs,
  getAboutUsById,
};
