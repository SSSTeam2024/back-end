const bestOfferComponentDao = require("../../dao/bestOfferComponentDao/bestOfferComponentDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");
const path = require("path");

const createBestOffer = async (bestOfferData, documents) => {
  let saveResult = await saveDocumentToServer(documents);

  if (saveResult) {
    return await bestOfferComponentDao.createBestOffer(bestOfferData);
  } else {
    throw new Error("Failed to save documents to the server.");
  }
};

const getBestOffer = async () => {
  return await bestOfferComponentDao.getBestOffer();
};

const updateBestOffer = async (id, updateData, documents) => {
  let saveResult = await saveDocumentToServer(documents);
  return await bestOfferComponentDao.updateBestOffer(id, updateData);
};

const deleteBestOffer = async (id) => {
  return await bestOfferComponentDao.deleteBestOffer(id);
};

async function saveDocumentToServer(documents) {
  let counter = 0;
  console.log("documents", documents);
  for (const file of documents) {
    await saveAdministrativeFile(file.base64String, file.name);
    counter++;
  }
  if (counter == documents.length) return true;
}

async function saveAdministrativeFile(base64String, fileName) {
  if (base64String != undefined) {
    const binaryData = Buffer.from(base64String, "base64");
    const directoryPath = path.join(__dirname, "files", "BestOffer");
    const filePath = "files/BestOffer/" + fileName;

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

const addTabToBestOffer = async (valueId, cardData, documents) => {
  let saveResult = await saveDocumentToServer(documents);

  const newTab = {
    title: cardData.title,
    display: cardData.display,
    content: cardData.content,
    buttonLabel: cardData.buttonLabel,
    buttonLink: cardData.buttonLink,
    buttonDisplay: cardData.buttonDisplay,
  };

  return await bestOfferComponentDao.addCardToBestOffer(valueId, newCard);
};

const getBestOfferById = async (id) => {
  return await bestOfferComponentDao.getBestOfferById(id);
};

module.exports = {
  createBestOffer,
  getBestOffer,
  updateBestOffer,
  deleteBestOffer,
  addTabToBestOffer,
  getBestOfferById,
};
