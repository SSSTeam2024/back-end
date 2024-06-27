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
            let quote = await QuoteDao.getQuoteById(arr[index].quote_Id);
            await emailSentServices.createEmailSent({
              date: arr[index].date_email,
              quoteID: quote.quote_ref,
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

const sendNewEmail = async (newData, quote_Id) => {
  let newEmail = newData.newEmail;
  let subject = newData.subject;
  let body = newData.body;
  let file = newData.file;
  let name = newData.name;

  let quote = null;
  if (quote_Id !== "") {
    quote = await QuoteDao.getQuoteById(quote_Id);
  }

  console.log("quote data", quote);
  console.log("body", body);
  let email = await prepareNewEmail(newEmail, subject, body, name, quote);
  await emailService.sendEmail(email, file);
  return "New Email sent!";
};

async function prepareNewEmail(newEmail, subject, body, name, quote) {
  console.log("body", body);
  // if (body.includes("[name]")) {
  //   console.log("name");
  //   newBody = body.replace("[name]", name);
  // }
  // if (body.includes("[customername]")) {
  //   newBody = body.replace("[customername]", name);
  // }
  // if (body.includes("[drivername]")) {
  //   console.log("drivername");
  //   newBody = body.replace("[drivername]", quote.id_driver.firstname);
  // }
  // if (body.includes("[quote_num]")) {
  //   newBody = body.replace("[quote_num]", quote.quote_ref);
  // }

  // if (body.includes("[Driver's Name]")) {
  //   console.log("Driver's Name");
  //   newBody = body.replace("[Driver's Name]", quote.id_driver.firstname);
  // }
  // if (body.includes("[Driver's Contact Number]")) {
  //   console.log("Driver's Contact Number");
  //   newBody = body.replace(
  //     "[Driver's Contact Number]",
  //     quote.id_driver.phonenumber
  //   );
  // }

  let recipient = newEmail;
  let emailBody = emailTemplatesStructure.emailTemplates.newEmail(body);
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
