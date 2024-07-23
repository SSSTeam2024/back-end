const visitorFeedbackDao = require("../../dao/visitorFeedbackDao/visitorFeedbackDao");

const createFeedback = async (feedbackData) => {
  return await visitorFeedbackDao.createFeedback(feedbackData);
};

const getFeedbacks = async () => {
  return await visitorFeedbackDao.getFeedbacks();
};

const getFeedbackById = async (id) => {
  return await visitorFeedbackDao.getFeedbackById(id);
};

module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
};
