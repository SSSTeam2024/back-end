const DriverFeedback = require("../../models/driverFeedbackModel/driverFeedbackModel");

const globalFunctions = require("../../utils/globalFunctions");

const createDriverFeedback = async (feedbackData) => {
  let feedback = await DriverFeedback.create(feedbackData);
  return await DriverFeedback.findById(feedback._id).populate("quote_id");
};

const getDriverFeedbacksByDriverId = async (id) => {
  const query = {
    driver_id: id,
  };

  // Execute the query
  const driverFeedbacks = await DriverFeedback.find(query).populate("quote_id");

  return driverFeedbacks;
};

const deleteFeedback = async (id) => {
  let folderPath = "files/driverFiles/feedback/";
  let toBeDeletedFeedback = await DriverFeedback.findById(id);
  if (toBeDeletedFeedback.image !== "") {
    let fullImagePath = folderPath + toBeDeletedFeedback.image;
    await globalFunctions.deleteFileFromServer(fullImagePath);
  }
  return await DriverFeedback.findByIdAndDelete(id);
};

const updateFeedbackById = async (updateData) => {
  let feedback_id = updateData.feedback_id;
  let category = updateData.category;
  let description = updateData.description;
  return await DriverFeedback.findByIdAndUpdate(
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
  return await DriverFeedback.findByIdAndUpdate(
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

const getAllDriversFeedbacks = async () => {
  return await DriverFeedback.find();
};

module.exports = {
  createDriverFeedback,
  getDriverFeedbacksByDriverId,
  deleteFeedback,
  updateFeedbackById,
  updateFeedbackAnswerById,
  getAllDriversFeedbacks,
};
