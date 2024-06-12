const driverFeedbackDao = require("../../dao/driverFeedbackDao/driverFeedbackDao");
const fs = require("fs");

const createDriverFeedback = async (feedbackData, documents) => {
  let saveResult = await saveDocumentsToServer(documents);
  console.log(saveResult);
  return await driverFeedbackDao.createDriverFeedback(feedbackData);
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
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const getDriverFeedbacksByDriverId = async (id) => {
  return await driverFeedbackDao.getDriverFeedbacksByDriverId(id);
};

const deleteFeedback = async (id) => {
  return await driverFeedbackDao.deleteFeedback(id);
};

const updateFeedbackById = async (updateData) => {
  return await driverFeedbackDao.updateFeedbackById(updateData);
};

const updateFeedbackAnswerById = async (updateData) => {
  return await driverFeedbackDao.updateFeedbackAnswerById(updateData);
};

const getAllDriversFeedbacks = async () => {
  return await driverFeedbackDao.getAllDriversFeedbacks();
};

module.exports = {
  createDriverFeedback,
  getDriverFeedbacksByDriverId,
  deleteFeedback,
  updateFeedbackById,
  getAllDriversFeedbacks,
  updateFeedbackAnswerById,
};
