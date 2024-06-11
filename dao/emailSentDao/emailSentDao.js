const EmailSent = require("../../models/emailSentModel/emailSentModel");

const createEmailSent = async (emailSent) => {
  return await EmailSent.create(emailSent);
};

const getEmails = async () => {
  return await EmailSent.find();
};

const deleteSentEmail = async (id) => {
  return await EmailSent.findByIdAndDelete(id);
};

const getAttachmentById = async (id) => {
  return await Attachment.findById(id);
};

module.exports = {
  createEmailSent,
  getEmails,
  deleteSentEmail,
  //   getAttachmentById,
};
