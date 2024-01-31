const complainDao = require("../../dao/complainDao/complainDao");
const fs = require('fs');

const createComplain = async (complainData, documents) => {
    console.log(complainData);
    console.log(documents);
    let saveResult = await saveMediaToServer(documents);
    console.log(saveResult);
  return await complainDao.createComplain(complainData);
};

async function saveMediaToServer(documents) {
  await saveMediaFile(documents[0].base64String, documents[0].name);
  return true;
}

async function saveMediaFile(base64String, fileName) {
  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  const filePath = "files/complainFiles/" + fileName;
  
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const getComplainById = async (id) => {
  return await complainDao.getComplainById(id);
}

const getComplains = async () => {
  return await complainDao.getComplains();
};

const updateComplain = async (id, updateData) => {
  return await complainDao.updateComplain(id, updateData);
};

const deleteComplain = async (id) => {
  return await complainDao.deleteComplain(id);
};

module.exports = {
  createComplain,
  getComplains,
  getComplainById,
  updateComplain,
  deleteComplain,
};
