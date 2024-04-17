const feedbackService = require("../../services/feedbackServices/feedbackService");

const createFeedback = async (req, res) => {
  try {
    const {
      experience_satisfaction_scale,
      booking_process,
      most_enjoyed,
      service_quality_scale,
      choosen_reason,
      trip_overall_rating,
      website_navigation,
      id_coorporate,
      id_student,
      id_parent,
      id_visitor,
    } = req.body;

    await feedbackService.createFeedback({
      experience_satisfaction_scale,
      booking_process,
      most_enjoyed,
      service_quality_scale,
      choosen_reason,
      trip_overall_rating,
      website_navigation,
      id_coorporate,
      id_student,
      id_parent,
      id_visitor,
    });
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await feedbackService.getFeedbacks();
    res.json( feedbacks );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFeedbackById = async (req, res) => {
  try {
    const feedbackId = req.params.id;

    const getFeedback = await feedbackService.getFeedbackById(feedbackId);

    if (!getFeedback) {
      return res.status(404).send("Feedback not found");
    }
    res.json(getFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
};
