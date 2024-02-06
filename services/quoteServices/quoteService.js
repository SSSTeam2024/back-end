const quoteDao = require('../../dao/quoteDao/quoteDao');
const visitorDao = require('../../dao/visitorDao/visitorDao');
const emailTemplateDao = require('../../dao/emailTemplateDao/emailTemplateDao');
const emailService = require('./emailService');
const emailTemplatesStructure = require('../../utils/emailTemplatesStructure');

const createQuote = async (quoteData) => {
  let id = quoteData.id_visitor;
  const quote = await quoteDao.createQuote(quoteData);
  let email = await prepareAfterQuoteCreationEmail(id, quote);
  await emailService.sendEmail(email);
  return quote;
};

const getQuotes = async () => {
  return await quoteDao.getQuotes();
};

const updateQuote = async (id, updateData) => {
  return await quoteDao.updateQuote(id, updateData);
};

const deleteQuote = async (id) => {
  return await quoteDao.deleteQuote(id);
};

const sendBookingEmail = async (bookingData) => {
  let id = bookingData.id_visitor;
  let email = await prepareQuoteBookingEmail(id);
  await emailService.sendEmail(email);
  return 'Booking Email sent!';
};


async function prepareAfterQuoteCreationEmail(idVisitor, quote){
  console.log(quote.type);
  let visitor = await visitorDao.getVisitorById(idVisitor);
  let recipient = visitor.email;
  const email = await emailTemplateDao.getEmailTemplateByName('visitor quote reception');
  let selectedTemplate = '';
  switch(quote.type){
    case 'One way':
      selectedTemplate = emailTemplatesStructure.emailTemplates.one_way_quote_received(visitor,quote);
      break;
    case 'Return':
      selectedTemplate = emailTemplatesStructure.emailTemplates.with_return_quote_received(visitor,quote);
      break;
    default: console.log('Wrong type');
  }
  let emailBody = selectedTemplate;//'<html>'+
  // '<body>'+
  //   '<h1>Hello, '+visitor.name+'</h1>'+
  //   '<p style="background: red"; color: #fff>'+email.body+'</p>'+
  //   '<img src="cid:unique-image-id" alt="Embedded Image">'+
  // '</body>'+
  // '</html>';
  let emailSubject = 'Quote received';
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

async function prepareQuoteBookingEmail(idVisitor){
  let visitor = await visitorDao.getVisitorById(idVisitor);
  let recipient = visitor.email;
  const email = await emailTemplateDao.getEmailTemplateByName('visitor booking with price');
  let emailBody = email.body;
  let emailSubject = 'Booking Information';
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody+ ' Link : http://localhost:3000/book-quote',
  };
  return fullEmailObject;
}

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
  sendBookingEmail
};
