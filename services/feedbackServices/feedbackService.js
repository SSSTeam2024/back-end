const feedbackDao = require('../../dao/feedbackDao/feedbackDao');

const createFeedback = async (feedbackData) => {
  return await feedbackDao.createFeedback(feedbackData);
};

const getFeedbacks = async () => {
  return await feedbackDao.getFeedbacks();
};

const getFeedbackById = async (id) => {
  return await feedbackDao.getFeedbackById(id);
}

module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
};
