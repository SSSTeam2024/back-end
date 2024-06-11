const emailTemplateDao = require("../../dao/emailTemplateDao/emailTemplateDao");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");
const emailService = require("./emailTemplateSendEmail");
const createEmailTemplate = async (emailTemplateData) => {
  return await emailTemplateDao.createEmailTemplate(emailTemplateData);
};

const getEmailTemplates = async () => {
  return await emailTemplateDao.getEmailTemplates();
};

const getEmailTemplateById = async (id) => {
  return await emailTemplateDao.getEmailTemplateById(id);
};

const updateEmailTemplate = async (id, updateData) => {
  return await emailTemplateDao.updateEmailTemplate(id, updateData);
};

const deleteEmailTemplate = async (id) => {
  return await emailTemplateDao.deleteEmailTemplate(id);
};

const sendNewEmail = async (newData) => {
  let newEmail = newData.newEmail;
  let subject = newData.subject;
  let body = newData.body;
  let file = newData.file;
  let name = newData.name;

  let email = await prepareNewEmail(newEmail, subject, body, name);
  await emailService.sendEmail(email, file);
  return "New Email sent!";
};

async function prepareNewEmail(newEmail, subject, body, name) {
  let newBody = "";
  if (body.includes("[name]")) {
    newBody = body.replace("[name]", name);
  }
  let recipient = newEmail;
  let emailBody = emailTemplatesStructure.emailTemplates.newEmail(newBody);
  let fullEmailObject = {
    to: recipient,
    subject: subject,
    body: emailBody,
  };
  return fullEmailObject;
}

module.exports = {
  createEmailTemplate,
  getEmailTemplates,
  getEmailTemplateById,
  updateEmailTemplate,
  deleteEmailTemplate,
  sendNewEmail,
};
