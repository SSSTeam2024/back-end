const emailTemplateDao = require("../../dao/emailTemplateDao/emailTemplateDao");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");
const emailService = require("./emailTemplateSendEmail");
const emailQueueService = require("../emailQueueServices/emailQueueServices");
const emailSentServices = require("../emailSentServices/emailSentServices");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");

const createEmailTemplate = async (emailTemplateData) => {
  return await emailTemplateDao.createEmailTemplate(emailTemplateData);
};

const getEmailTemplates = async () => {
  return await emailTemplateDao.getEmailTemplates();
};

const sendAllQueueEmails = async () => {
  let queueEmails = await emailQueueService.getEmailQueues();
  localStorage.setItem("isSendingAllQueueEmails", "true");
  async function sendWithDelay(arr, index = 0) {
    if (index < arr.length) {
      let email = await prepareNewEmail(
        arr[index].newEmail,
        arr[index].subject,
        arr[index].body,
        arr[index].name
      );
      await emailService.sendEmail(email, arr[index].file).then(async () => {
        await emailQueueService
          .deleteEmailQueue(arr[index]._id)
          .then(async () => {
            await emailSentServices.createEmailSent({
              date: arr[index].date_email,
              quoteID: arr[index].quote_Id,
              subjectEmail: arr[index].subject,
              from: arr[index].sender,
              to: arr[index].newEmail,
            });
          });
      });

      setTimeout(() => {
        sendWithDelay(arr, index + 1);
      }, 2000);
    } else {
      localStorage.setItem("isSendingAllQueueEmails", "false");
      return "All Emails Sent With Success!!!";
    }
  }

  await sendWithDelay(queueEmails);
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
  sendAllQueueEmails,
};
