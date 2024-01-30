const Feedback = require('../../models/feedbackModel/feedback');

const createFeedback = async (feedbackData) => {
  return await Feedback.create(feedbackData);
};

const getFeedbacks = async () => {
  return await Feedback.find();
};

const getFeedbackById = async (id) => {
  return await Feedback.findById(id);
}

module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
};