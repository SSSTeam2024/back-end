const VisitorFeedback = require("../../models/visitorFeedbackModel/visitorFeedback");

const createFeedback = async (feedbackData) => {
  return await VisitorFeedback.create(feedbackData);
};

const getFeedbacks = async () => {
  return await VisitorFeedback.find();
};

const getFeedbackById = async (id) => {
  return await VisitorFeedback.findById(id);
};

module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
};
