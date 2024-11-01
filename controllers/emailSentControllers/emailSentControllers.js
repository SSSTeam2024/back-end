const emailSentService = require("../../services/emailSentServices/emailSentServices");

const createEmailSent = async (req, res) => {
  try {
    const { date, quoteID, subjectEmail, from, to, emailBody } = req.body;
    let id = null;
    if (quoteID !== "") {
      id = quoteID;
    }
    const newEmailSent = await emailSentService.createEmailSent({
      date,
      quoteID: id,
      subjectEmail,
      from,
      to,
      emailBody,
    });
    res.status(201).json(newEmailSent);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteSentEmail = async (req, res) => {
  try {
    const SentEmailId = req.params.id;

    const deletedSentEmail = await emailSentService.deleteSentEmail(
      SentEmailId
    );

    if (!deletedSentEmail) {
      return res.status(404).send("Sent Email not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getSentEmails = async (req, res) => {
  try {
    const emails = await emailSentService.getEmails();
    res.json(emails);
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
  createEmailSent,
  //   getById,
  //   //   updateCheckType,
  //   //   createCheckType,
  getSentEmails,
  deleteSentEmail,
};
