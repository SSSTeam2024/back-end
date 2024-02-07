const complainService = require('../../services/complainServices/complainService');
const globalFunctions = require('../../utils/globalFunctions');

const addNewComplain = async (req, res) => {
  try {
    const { 
        id_corporate,
        id_student,
        id_parent,
        id_employee,
        subject,
        description,
        complainDate,
        responseMessage,
        responseDate,
        status,
        mediaBase64String,
        mediaExtension
    } = req.body;

    let media = globalFunctions.generateUniqueFilename(mediaExtension,'complainMedia');

    let documents = [
      {
        base64String: mediaBase64String,
        extension: mediaExtension,
        name: media
      }
    ];
    
    await complainService.createComplain({ 
      id_corporate,
      id_student,
      id_parent,
      id_employee,
      subject,
      description,
      complainDate,
      responseMessage,
      responseDate,
      status,
      media
     },documents);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateComplainById = async (req, res) => {
  try {
    const complainId = req.params.id;
    const { 
      subject,
      description,
      responseMessage,
      responseDate,
      status
     } = req.body;

    const updatedComplain = await complainService.updateComplain(complainId, { 
      subject,
      description,
      responseMessage,
      responseDate,
      status
     });

    if (!updatedComplain) {
      return res.status(404).send('Complain not found!');
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
      return res.status(404).send('Complain not found');
    }
    res.json(getComplain);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

const getAllComplains = async (req, res) => {
  try {
    const complains = await complainService.getComplains();
    res.json({ complains });
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
      return res.status(404).send('Complain not found');
    }
    res.sendStatus(200);
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
  deleteComplainById
};
