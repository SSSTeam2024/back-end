const emailTemplateDao = require("../../dao/emailTemplateDao/emailTemplateDao");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");
const emailService = require("./emailTemplateSendEmail");
const emailQueueService = require("../emailQueueServices/emailQueueServices");
const emailSentServices = require("../emailSentServices/emailSentServices");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");
const QuoteDao = require("../../dao/quoteDao/quoteDao");

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
      let quote = null;
      if (arr[index].quote_Id !== undefined) {
        quote = await QuoteDao.getQuoteById(arr[index].quote_Id);
      }

      let email = await prepareNewEmail(
        arr[index].newEmail,
        arr[index].subject,
        arr[index].body,
        arr[index].name,
        quote
      );
      await emailService.sendEmail(email, arr[index].file).then(async () => {
        await emailQueueService
          .deleteEmailQueue(arr[index]._id)
          .then(async () => {
            if (arr[index].quote_Id !== undefined) {
              await emailSentServices.createEmailSent({
                date: arr[index].date_email,
                quoteID: quote.quote_ref,
                subjectEmail: arr[index].subject,
                from: arr[index].sender,
                to: arr[index].newEmail,
              });
            } else {
              await emailSentServices.createEmailSent({
                date: arr[index].date_email,
                quoteID: null,
                subjectEmail: arr[index].subject,
                from: arr[index].sender,
                to: arr[index].newEmail,
              });
            }
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

const sendNewEmail = async (newData, quote_Id) => {
  let newEmail = newData.newEmail;
  let subject = newData.subject;
  let body = newData.body;
  let file = newData.file;
  let name = newData.name;
  let quote = null;
  if (quote_Id !== undefined) {
    quote = await QuoteDao.getQuoteById(quote_Id);
  }

  let email = await prepareNewEmail(newEmail, subject, body, name, quote);

  await emailService.sendEmail(email, file);
  return "New Email sent!";
};

async function prepareNewEmail(newEmail, subject, body, name, quote) {
  let newBody = body;

  if (body.includes("[name]")) {
    newBody = newBody.replace("[name]", name);
  }

  if (body.includes("[customername]")) {
    newBody = newBody.replace("[customername]", name);
  }
  if (quote !== null) {
    if (body.includes("[drivername]")) {
      newBody = newBody.replace("[drivername]", quote.id_driver.firstname);
    }
    if (body.includes("[quote_num]")) {
      newBody = newBody.replace("[quote_num]", quote.quote_ref);
    }

    if (body.includes("[Driver's Name]")) {
      newBody = newBody.replace("[Driver's Name]", quote.id_driver.firstname);
    }
    if (body.includes("[Driver's Contact Number]")) {
      newBody = newBody.replace(
        "[Driver's Contact Number]",
        quote.id_driver.phonenumber
      );
    }
  }

  if (body.includes("[Website_phone]")) {
    newBody = newBody.replace("[Website_phone]", "+44 800 112 3770 ");
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
