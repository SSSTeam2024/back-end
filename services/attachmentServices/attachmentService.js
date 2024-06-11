const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const attachmentDao = require("../../dao/attachmentDao/attachmentDao");
const globalFunctions = require("../../utils/globalFunctions");

const createAttachment = async (attachmentData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);
  return await attachmentDao.createAttachment(attachmentData);
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

const getAttachments = async () => {
  return await attachmentDao.getAttachments();
};

const deleteAttachment = async (id) => {
  return await attachmentDao.deleteAttachment(id);
};

const getAttachmentById = async (id) => {
  return await attachmentDao.getAttachmentById(id);
};

module.exports = {
  createAttachment,
  saveDocumentsToServer,
  getAttachments,
  deleteAttachment,
  getAttachmentById,
};
