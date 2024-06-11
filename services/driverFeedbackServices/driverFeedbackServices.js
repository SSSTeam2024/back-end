const driverFeedbackDao = require("../../dao/driverFeedbackDao/driverFeedbackDao");

const createDriverFeedback = async (feedbackData) => {
  return await driverFeedbackDao.createDriverFeedback(feedbackData);
};

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
