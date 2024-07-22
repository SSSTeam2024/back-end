const complainService = require("../../services/complainServices/complainService");
const globalFunctions = require("../../utils/globalFunctions");
const mongoose = require("mongoose");

const addNewComplain = async (req, res) => {
  try {
    const {
      id_company,
      id_school,
      id_student,
      id_parent,
      subject,
      description,
      complainDate,
      responseMessage,
      responseAuthor,
      responseDate,
      status,
      pdfBase64String,
      pdfExtension,
      photoBase64Strings,
      photoExtension,
      videoBase64Strings,
      videoExtension,
      archived,
      resPhoto,
      resVideo,
      resPhotoBase64Strings,
      ResPhotoExtension,
      resVideoBase64Strings,
      ResVideoExtension,
    } = req.body;

    const pdfPath = "files/complainFiles/pdf/";
    const photoPath = "files/complainFiles/photos/";
    const videoPath = "files/complainFiles/videos/";

    let pdf = globalFunctions.generateUniqueFilename(
      pdfExtension,
      "complainMedia"
    );
    let photo = globalFunctions.generateUniqueFilename(
      photoExtension,
      "ComplainPhotos"
    );
    let video = globalFunctions.generateUniqueFilename(
      videoExtension,
      "ComplaintVideo"
    );

    let documents = [
      {
        base64String: pdfBase64String,
        extension: pdfExtension,
        name: pdf,
        path: pdfPath,
      },
      {
        base64String: photoBase64Strings,
        extension: photoExtension,
        name: photo,
        path: photoPath,
      },
      {
        base64String: videoBase64Strings,
        extension: videoExtension,
        name: video,
        path: videoPath,
      },
    ];

    const complainData = {
      id_company,
      id_school,
      id_student,
      id_parent,
      subject,
      description,
      complainDate,
      responseMessage,
      responseAuthor,
      responseDate,
      status,
      archived,
      pdf,
      photo,
      video,
      resPhoto,
      resVideo,
    };

    await complainService.createComplain(complainData, documents);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const respondToComplain = async (req, res) => {
  try {
    const {
      _id,
      responseMessage,
      responseAuthor,
      responseDate,
      resPhotoBase64Strings,
      ResPhotoExtension,
      resVideoBase64Strings,
      ResVideoExtension,
    } = req.body;
    console.log(req.body);
    const ResPhotoPath = "files/complainFiles/resPhotos/";
    const ResVideoPath = "files/complainFiles/resVideos/";

    // Check if base64 strings are defined before creating ResDocuments array
    const resPhoto = globalFunctions.generateUniqueFilename(
      ResPhotoExtension,
      "ResComplainPhotos"
    );
    const resVideo = globalFunctions.generateUniqueFilename(
      ResVideoExtension,
      "ResComplaintVideo"
    );

    const documents = [
      {
        base64String: resPhotoBase64Strings,
        extension: ResPhotoExtension,
        name: resPhoto,
        path: ResPhotoPath,
      },
      {
        base64String: resVideoBase64Strings,
        extension: ResVideoExtension,
        name: resVideo,
        path: ResVideoPath,
      },
    ];
    // Update status to "answered"
    const complainResData = {
      _id,
      responseMessage,
      responseAuthor,
      responseDate,
      resPhoto,
      resVideo,
    };
    console.log("From Controllers", documents);
    // await complainService.respondToComplaint(
    //   _id,
    //   responseMessage,
    //   responseDate,
    //   responseAuthor,
    //   resPhoto,
    //   resVideo
    //   );
    await complainService.respondToComplaint(complainResData, documents);
    console.log(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error responding to complaint:", error);
    res.status(500).send(error.message);
  }
};

const updateComplainToPushed = async (req, res) => {
  try {
    const { _id } = req.body;

    // Update the status to "pushed"
    const updatedComplain = await complainService.updateComplainToPushed(_id);
    return res.status(200).json(updatedComplain);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateComplainToArchived = async (req, res) => {
  try {
    const { _id } = req.body;

    // Update the status to "archived"
    const updatedComplain = await complainService.updateComplainToArchived(_id);
    return res.status(200).json(updatedComplain);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateComplainById = async (req, res) => {
  try {
    const complainId = req.params.id;
    const { subject, description, responseMessage, responseDate, status } =
      req.body;

    const updatedComplain = await complainService.updateComplain(complainId, {
      subject,
      description,
      responseMessage,
      responseDate,
      status,
    });

    if (!updatedComplain) {
      return res.status(404).send("Complain not found!");
    }
    res.json(updatedComplain);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getComplainById = async (req, res) => {
  try {
    const complainId = req.params.id;

    const getComplain = await complainService.getComplainById(complainId);

    if (!getComplain) {
      return res.status(404).send("Complain not found");
    }
    res.json(getComplain);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getAllComplains = async (req, res) => {
  try {
    const complains = await complainService.getComplains();
    res.json(complains);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteComplainById = async (req, res) => {
  try {
    const complainId = req.params.id;

    const deletedComplain = await complainService.deleteComplain(complainId);

    if (!deletedComplain) {
      return res.status(404).send("Complain not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getComplainByIdCompany = async (req, res) => {
  try {
    const id_company = req.body.id_company;
    const getComplainByIdCompany = await complainService.getComplainByIdCompany(
      id_company
    );
    if (!getComplainByIdCompany) {
      res.status(404).send("Complain not found");
    }
    res.json({ getComplainByIdCompany });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getComplainByIdSchool = async (req, res) => {
  try {
    const id_school = req.body.id_school;
    const getComplainByIdSchool = await complainService.getComplainByIdSchool(
      id_school
    );
    if (!getComplainByIdSchool) {
      res.status(404).send("Complain not found");
    }
    res.json({ getComplainByIdSchool });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addNewComplain,
  updateComplainById,
  getComplainById,
  getAllComplains,
  deleteComplainById,
  respondToComplain,
  updateComplainToPushed,
  updateComplainToArchived,
  getComplainByIdCompany,
  getComplainByIdSchool,
};
