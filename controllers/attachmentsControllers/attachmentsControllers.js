const attachmentService = require("../../services/attachmentServices/attachmentService");

const createAttachment = async (req, res) => {
  try {
    const { name, attachment_base64_string, attachment_extension } = req.body;

    const attachmentFilesPath = "files/attachmentFiles/";
    let attachment = name + "." + attachment_extension;
    let documents = [
      {
        base64String: attachment_base64_string,
        extension: attachment_extension,
        name: attachment,
        path: attachmentFilesPath,
      },
    ];

    const newAttachment = await attachmentService.createAttachment(
      {
        name,
        attachment,
      },
      documents
    );
    res.status(201).json(newAttachment);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// const updateCheckType = async (req, res) => {
//   try {
//     const checkTypeId = req.params.id;
//     const { type, duration } = req.body;

//     const updatedCheckType = await checkTypeService.updateCheckType(
//       checkTypeId,
//       {
//         type,
//         duration,
//       }
//     );

//     if (!updatedCheckType) {
//       return res.status(404).send("Duty check not found");
//     }
//     res.json(updatedCheckType);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// };
const deleteAttachment = async (req, res) => {
  try {
    const attachmentId = req.params.id;

    const deletedAttachment = await attachmentService.deleteAttachment(
      attachmentId
    );

    if (!deletedAttachment) {
      return res.status(404).send("Attachment not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getAttachments = async (req, res) => {
  try {
    const Attachments = await attachmentService.getAttachments();
    res.json(Attachments);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getById = async (req, res) => {
  try {
    const attachmentId = req.params.id;

    const getAttachmentId = await attachmentService.getAttachmentById(
      attachmentId
    );

    if (!getAttachmentId) {
      return res.status(404).send("Attachment not found");
    }
    res.json(getAttachmentId);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createAttachment,
  getById,
  //   updateCheckType,
  //   createCheckType,
  getAttachments,
  deleteAttachment,
};
