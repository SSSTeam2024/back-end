const Feedback = require("../../models/feedbackModel/feedbackModel");

const globalFunctions = require("../../utils/globalFunctions");

const createFeedback = async (feedbackData) => {
  let feedback = await Feedback.create(feedbackData);
  return await Feedback.findById(feedback._id).populate("quote_id");
};

const getFeedbacksByDriverId = async (id) => {
  const query = {
    driver_id: id,
  };

  // Execute the query
  const driverFeedbacks = await Feedback.find(query).populate("quote_id");

  return driverFeedbacks;
};

const getFeedbacksByStudentId = async (id) => {
  const query = {
    student_id: id,
  };

  // Execute the query
  const studentFeedbacks = await Feedback.find(query).populate("quote_id");

  return studentFeedbacks;
};

const getFeedbacksByEmployeeId = async (id) => {
  const query = {
    employee_id: id,
  };

  // Execute the query
  const employeeFeedbacks = await Feedback.find(query).populate("quote_id");

  return employeeFeedbacks;
};

const deleteFeedback = async (id) => {
  let folderPath = "files/feedbackFiles/";
  let toBeDeletedFeedback = await Feedback.findById(id);
  if (toBeDeletedFeedback.image !== "") {
    console.log("inside if");
    let fullImagePath = folderPath + toBeDeletedFeedback.image;
    await globalFunctions.deleteFileFromServer(fullImagePath);
  }
  return await Feedback.findByIdAndDelete(id);
};

const updateFeedbackById = async (updateData) => {
  let feedback_id = updateData.feedback_id;
  let category = updateData.category;
  let description = updateData.description;
  return await Feedback.findByIdAndUpdate(
    { _id: feedback_id },
    {
      $set: {
        category: category,
        description: description,
      },
    },
    {
      new: true,
    }
  ).populate("quote_id");
};

const updateFeedbackAnswerById = async (updateData) => {
  let feedback_id = updateData.feedback_id;
  let answer = updateData.answer;
  return await Feedback.findByIdAndUpdate(
    { _id: feedback_id },
    {
      $set: {
        answer: answer,
        status: "Answered",
      },
    },
    {
      new: true,
    }
  );
};

const getAllFeedbacks = async () => {
  return await Feedback.find()
    .populate("quote_id")
    .populate("driver_id")
    .populate("student_id")
    .populate("employee_id");
};

module.exports = {
  createFeedback,
  getFeedbacksByDriverId,
  getFeedbacksByEmployeeId,
  getFeedbacksByStudentId,
  deleteFeedback,
  updateFeedbackById,
  updateFeedbackAnswerById,
  getAllFeedbacks,
};
