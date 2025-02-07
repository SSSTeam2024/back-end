const offerServicesDao = require("../../dao/offerServicesDao/offerServicesDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

const createOfferService = async (offerServiceData, documents) => {
  if (documents.length === 0) {
    return await offerServicesDao.createOfferService(offerServiceData);
  } else {
    let saveResult = await saveDocumentToServer(documents);
    return await offerServicesDao.createOfferService(offerServiceData);
  }
};

const getOfferService = async () => {
  return await offerServicesDao.getOfferService();
};

const updateOfferService = async (id, updateData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await offerServicesDao.updateOfferService(id, updateData);
};

const deleteOfferService = async (id) => {
  return await offerServicesDao.deleteOfferService(id);
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
    const directoryPath = path.join(__dirname, "files", "OfferService");
    const filePath = "files/OfferService/" + fileName;

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

const addCardToOfferService = async (valueId, cardData, documents) => {
  let saveResult = await saveDocumentToServer(documents);

  const newCard = {
    title: cardData.title,
    display: cardData.display,
    content: cardData.content,
    image: cardData.image,
    icon: cardData.icon,
  };

  return await offerServicesDao.addCardToOfferService(valueId, newCard);
};

const getOfferServiceById = async (id) => {
  return await offerServicesDao.getOfferServiceById(id);
};

module.exports = {
  createOfferService,
  getOfferService,
  updateOfferService,
  deleteOfferService,
  addCardToOfferService,
  getOfferServiceById,
};
