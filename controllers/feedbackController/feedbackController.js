const feedbackService = require("../../services/feedbackServices/feedbackServices");
const globalFunctions = require("../../utils/globalFunctions");

const createFeedback = async (req, res) => {
  try {
    const {
      driver_id,
      student_id,
      employee_id,
      category,
      quote_id,
      description,
      status,
      answer,
      imageBase64,
      imageExtension,
    } = req.body;

    let image = "";
    const imagePath = "files/feedbackFiles/";

    if (imageBase64 !== "" && imageExtension !== "") {
      image = globalFunctions.generateUniqueFilename(
        imageExtension,
        "Feedback"
      );
    }

    let toBeSavedData = {
      driver_id,
      student_id,
      employee_id,
      category,
      quote_id,
      description,
      status,
      answer,
      image,
    };

    let documents = [
      {
        base64String: imageBase64,
        name: image,
        path: imagePath,
      },
    ];

    let createdFeedback = await feedbackService.createFeedback(
      toBeSavedData,
      documents
    );
    res.json(createdFeedback);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFeedbacksByDriverId = async (req, res) => {
  try {
    const driverId = req.params.id;

    const driverFeedbacks = await feedbackService.getFeedbacksByDriverId(
      driverId
    );

    if (!driverFeedbacks) {
      return res.status(404).send("No driver feedback found");
    }
    res.json(driverFeedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFeedbacksByStudentId = async (req, res) => {
  try {
    const studentId = req.params.id;

    const studentFeedbacks = await feedbackService.getFeedbacksByStudentId(
      studentId
    );

    if (!studentFeedbacks) {
      return res.status(404).send("No student feedback found");
    }
    res.json(studentFeedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getFeedbacksByEmployeeId = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const employeeFeedbacks = await feedbackService.getFeedbacksByEmployeeId(
      employeeId
    );

    if (!employeeFeedbacks) {
      return res.status(404).send("No employee feedback found");
    }
    res.json(employeeFeedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteFeedbackById = async (req, res) => {
  try {
    const feedbackId = req.params.id;
    console.log(feedbackId);
    const deletedFeedback = await feedbackService.deleteFeedback(feedbackId);

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
    const updatedFeedback = await feedbackService.updateFeedbackById({
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
    const updatedFeedback = await feedbackService.updateFeedbackAnswerById({
      feedback_id,
      answer,
    });
    res.json({ success: updatedFeedback });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await feedbackService.getAllFeedbacks();
    res.json(feedbacks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createFeedback,
  getFeedbacksByDriverId,
  getFeedbacksByEmployeeId,
  getFeedbacksByStudentId,
  deleteFeedbackById,
  updateFeedbackById,
  getAllFeedbacks,
  updateFeedbackAnswerById,
};
