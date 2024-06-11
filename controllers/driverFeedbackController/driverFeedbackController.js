const driverFeedbackService = require("../../services/driverFeedbackServices/driverFeedbackServices");

const createDriverFeedback = async (req, res) => {
  try {
    const { driver_id, category, quote_id, description, status, answer } =
      req.body;

    let createdFeedback = await driverFeedbackService.createDriverFeedback({
      driver_id,
      category,
      quote_id,
      description,
      status,
      answer,
    });
    res.json(createdFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getDriverFeedbacksByDriverId = async (req, res) => {
  try {
    const driverId = req.params.id;

    const driverFeedbacks =
      await driverFeedbackService.getDriverFeedbacksByDriverId(driverId);

    if (!driverFeedbacks) {
      return res.status(404).send("No driver feedback found");
    }
    res.json(driverFeedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteFeedbackById = async (req, res) => {
  try {
    const feedbackId = req.params.id;
    console.log(feedbackId);
    const deletedFeedback = await driverFeedbackService.deleteFeedback(
      feedbackId
    );

    if (!deletedFeedback) {
      return res.status(404).send("Feedback not found");
    }
    res.json({ msg: "Feed back deleted!" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateFeedbackById = async (req, res) => {
  try {
    const { feedback_id, category, description } = req.body;
    const updatedFeedback = await driverFeedbackService.updateFeedbackById({
      feedback_id,
      category,
      description,
    });
    res.json({ success: updatedFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateFeedbackAnswerById = async (req, res) => {
  try {
    const { feedback_id, answer } = req.body;
    const updatedFeedback =
      await driverFeedbackService.updateFeedbackAnswerById({
        feedback_id,
        answer,
      });
    res.json({ success: updatedFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllDriversFeedbacks = async (req, res) => {
  try {
    const driversfeedbacks =
      await driverFeedbackService.getAllDriversFeedbacks();
    res.json(driversfeedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createDriverFeedback,
  getDriverFeedbacksByDriverId,
  deleteFeedbackById,
  updateFeedbackById,
  getAllDriversFeedbacks,
  updateFeedbackAnswerById,
};
