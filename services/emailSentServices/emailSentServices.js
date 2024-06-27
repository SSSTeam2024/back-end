const emailSentDao = require("../../dao/emailSentDao/emailSentDao");

const createEmailSent = async (emailSentData) => {
  return await emailSentDao.createEmailSent(emailSentData);
};

const getEmails = async () => {
  return await emailSentDao.getEmails();
};

const deleteSentEmail = async (id) => {
  return await emailSentDao.deleteSentEmail(id);
};

const getAttachmentById = async (id) => {
  return await attachmentDao.getAttachmentById(id);
};

module.exports = {
  createEmailSent,
  getEmails,
  deleteSentEmail,
};
