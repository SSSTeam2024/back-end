const feedbackDao = require("../../dao/feedbackDao/feedbackDao");
const fs = require("fs");
const globalFunctions = require("../../utils/globalFunctions");

const createFeedback = async (feedbackData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);
  console.log(saveResult);
  return await feedbackDao.createFeedback(feedbackData);
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

const getFeedbacksByDriverId = async (id) => {
  return await feedbackDao.getFeedbacksByDriverId(id);
};

const getFeedbacksByStudentId = async (id) => {
  return await feedbackDao.getFeedbacksByStudentId(id);
};

const getFeedbacksByEmployeeId = async (id) => {
  return await feedbackDao.getFeedbacksByEmployeeId(id);
};

const deleteFeedback = async (id) => {
  return await feedbackDao.deleteFeedback(id);
};

const updateFeedbackById = async (updateData) => {
  return await feedbackDao.updateFeedbackById(updateData);
};

const updateFeedbackAnswerById = async (updateData) => {
  return await feedbackDao.updateFeedbackAnswerById(updateData);
};

const getAllFeedbacks = async () => {
  return await feedbackDao.getAllFeedbacks();
};

module.exports = {
  createFeedback,
  getFeedbacksByDriverId,
  getFeedbacksByEmployeeId,
  getFeedbacksByStudentId,
  deleteFeedback,
  updateFeedbackById,
  getAllFeedbacks,
  updateFeedbackAnswerById,
};
