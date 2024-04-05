const complainDao = require("../../dao/complainDao/complainDao");
const fs = require("fs").promises;

async function saveMediaToServer(documents) {
  try {
    let counter = 0;
    for (const file of documents) {
      if (!file || !file.base64String || !file.name || !file.path) {
        console.error("Invalid file object:", file);
        continue; // Skip processing this file and move to the next one
      }

      console.log("Processing file:", file.name);
      await saveFile(file.base64String, file.name, file.path);
      counter++;
      console.log("File number " + counter + " saved");
    }
    if (counter === documents.length) return true;
  } catch (error) {
    console.error("Error saving media files:", error);
    throw error;
  }
}

async function saveFile(base64String, fileName, file_path) {
  // const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, '');
  const binaryData = Buffer.from(base64String, "base64");
  const filePath = file_path + fileName;
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const createComplain = async (complainData, documents) => {
  complainData.status = "pending";
  complainData.archived = "no"

  let saveResult = await saveMediaToServer(documents);

  // Omit id_employee if not provided or set it to null
  if (!complainData.hasOwnProperty("id_employee")) {
    delete complainData.id_employee;
  }
  return await complainDao.createComplain(complainData);
};

const respondToComplaint = async (data, documents) => {
  try {
    // Update complaint status to "answered"
    console.log("Complain Services 58", documents);
    await complainDao.updateComplaintStatus(data._id, "answered");
    let saveResult = await saveMediaToServer(documents);
    console.log("Complain Services 61", documents);
    // Update response message, author, and date
    const currentDate = new Date();
    await complainDao.updateComplaintResponse(
      data._id,
      data.responseMessage,
      data.responseAuthor,
      currentDate,
      data.resPhoto,
      data.resVideo,
    );
  } catch (error) {
    console.error("Error responding to complaint:", error);
    throw error;
  }
};

async function updateComplainToPushed(_id) {
  try {
    // Check if complainId is provided
    if (!_id) {
      throw new Error("complainId is required");
    }

    // Update the status to "pushed"
    const updatedComplain = await complainDao.updateComplainToPushed(
      _id,
      "pushed"
    );
    return updatedComplain;
  } catch (error) {
    throw error;
  }
}
async function updateComplainToArchived(_id) {
  try {
    // Check if complainId is provided
    if (!_id) {
      throw new Error("complain Id is required");
    }

    // Update the status to "pushed"
    const updatedComplain = await complainDao.updateComplainToArchived(
      _id,
      "yes"
    );
    return updatedComplain;
  } catch (error) {
    throw error;
  }
}

const getComplainById = async (id) => {
  return await complainDao.getComplainById(id);
};

const getComplains = async () => {
  return await complainDao.getComplains();
};

const updateComplain = async (id, updateData) => {
  return await complainDao.updateComplain(id, updateData);
};

const deleteComplain = async (id) => {
  return await complainDao.deleteComplain(id);
};

// const deleteComplain = async () => {
//   return await complainDao.deleteComplain();
// };

const getComplainByIdCompany = async (id_corporate) => {
  return await complainDao.getComplainByIdCompany(id_corporate);
};

module.exports = {
  createComplain,
  getComplains,
  getComplainById,
  updateComplain,
  deleteComplain,
  respondToComplaint,
  updateComplainToPushed,
  updateComplainToArchived,
  getComplainByIdCompany
};
