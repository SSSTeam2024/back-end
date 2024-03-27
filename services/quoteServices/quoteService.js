const quoteDao = require("../../dao/quoteDao/quoteDao");
const visitorDao = require("../../dao/visitorDao/visitorDao");
const emailService = require("./emailService");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");
const modeDao = require("../../dao/modeDao/modeDao");
const mileageBandDao = require("../../dao/mileageBandDao/mileageBandDao");

const convertMeterToMiles = (m) => {
  return m * 0.000621371;
};

const createQuote = async (quoteData, distance) => {
  let id = quoteData.id_visitor;
  const quote = await quoteDao.createQuote(quoteData);
  let modes = await modeDao.getModes();
  let priceMode = modes[0].type;
  let email = "";
  let autoPrice = 0;
  if (priceMode === "0") {
    email = await prepareAfterQuoteCreationEmail(id, quote);
  }
  if (priceMode === "1") {
    let mileDistance = convertMeterToMiles(distance);
    let dataAllMileageBands = await mileageBandDao.getMileageBands();
    for (let i = 0; i < dataAllMileageBands.length; i++) {
      if (quoteData.vehicle_type === dataAllMileageBands[i].vehicle_type.type) {
        let selectedBand = dataAllMileageBands.find(
          (band) =>
            band.vehicle_type.type === quoteData.vehicle_type &&
            Number(mileDistance) <= Number(band.mileage_limit)
        );
        // console.log(selectedBand);
        let base_charge =
          selectedBand.vehicle_type?.base_change.match(/£(\d+(\.\d{1,4})?)/);
        let extractedBase_charge = base_charge ? base_charge[1] : null;
        // console.log(extractedBase_charge);
        // let unitPrice = selectedBand.price.match(/£(\d+(\.\d{1,4})?)/);
        // let extractedUnitPrice = unitPrice ? unitPrice[1] : null;
        // let extractedUnitPrice = selectedBand.price;
        // console.log(selectedBand.price);
        // console.log(selectedBand.vehicle_type?.coverage_mile);
        autoPrice = (
          Number(extractedBase_charge) +
          (Number(mileDistance) -
            Number(selectedBand.vehicle_type?.coverage_mile)) *
            Number(selectedBand.price)
        ).toFixed(2);
        break;
      }
    }
    let quote_id = quote._id;
    await quoteDao.updateQuotePrice(quote_id, autoPrice);
    let url = "http://localhost:3000/api/quote/confirm-booking/" + quote_id;
    email = await prepareQuoteBookingEmail(id, autoPrice, url, quote);
  }

  await emailService.sendEmail(email);
  return quote;
};

const getQuotes = async () => {
  return await quoteDao.getQuotes();
};

const getQuoteById = async (id) => {
  return await quoteDao.getQuoteById(id);
};

const updateQuote = async (id, updateData) => {
  return await quoteDao.updateQuote(id, updateData);
};

const deleteQuote = async (id) => {
  return await quoteDao.deleteQuote(id);
};

const sendBookingEmail = async (bookingData) => {
  let id = bookingData.id_visitor;
  let price = bookingData.price;
  let quote_id = bookingData.quote_id;
  let auto_price = bookingData.automatic_cost;
  let deposit_amount = bookingData.deposit_amount;
  let deposit_percentage = bookingData.deposit_percentage;
  let total_price = bookingData.total_price;

  await quoteDao.updateQuotePrice(
    quote_id,
    price,
    auto_price,
    deposit_amount,
    deposit_percentage,
    total_price
  );
  let quote = await quoteDao.getQuoteById(quote_id);
  let url = "http://localhost:3000/api/quote/confirm-booking/" + quote_id;
  let email = await prepareQuoteBookingEmail(
    id,
    price,
    deposit_percentage,
    url,
    quote
  );
  await emailService.sendEmail(email);
  return "Booking Email sent!";
};

const sendAssign = async (bookingData) => {
  // let id = bookingData.id_visitor;
  let price = bookingData.price;
  let quote_id = bookingData.quote_id;
  let driver = bookingData.id_driver;
  let vehicle = bookingData.id_vehicle;
  await quoteDao.updateQuoteDriver(quote_id, price, driver, vehicle);
  return "Driver and Vehicle Assigned!!";
};

const assignDriver = async (bookingData) => {
  let quote_id = bookingData.quote_id;
  let driver = bookingData.id_driver;
  await quoteDao.updateDriver(quote_id, driver);
  return "Driver Assigned!!";
};

const assignVehicle = async (bookingData) => {
  let quote_id = bookingData.quote_id;
  let vehicle = bookingData.id_vehicle;
  await quoteDao.updateVehicle(quote_id, vehicle);
  return "Vehicle Assigned!!";
};

const sendPaymentEmail = async (paymentData) => {
  let id = paymentData.id_visitor;
  let quote_id = paymentData.quote_id;
  let quote = await quoteDao.getQuoteById(quote_id);
  let url =
    "http://localhost:3000/api/quote/quote-payment/4fe5t1g44f6d5f748ds654fs97fsd4fs8df764h6j78ty";
  let email = await prepareQuotePaymentEmail(id, url, quote);
  await emailService.sendEmail(email);
  return "Payment Email sent!";
};

async function prepareAfterQuoteCreationEmail(idVisitor, quote) {
  let visitor = await visitorDao.getVisitorById(idVisitor);
  let recipient = visitor.email;
  //const email = await emailTemplateDao.getEmailTemplateByName('visitor quote reception');
  const creationDate = quote.createdAt;

  const formattedCreationDate = creationDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  let selectedTemplate = "";
  switch (quote.type) {
    case "One way":
      selectedTemplate =
        emailTemplatesStructure.emailTemplates.one_way_quote_received(
          visitor,
          quote,
          formattedCreationDate
        );
      break;
    case "Return":
      selectedTemplate =
        emailTemplatesStructure.emailTemplates.with_return_quote_received(
          visitor,
          quote,
          formattedCreationDate
        );
      break;
    default:
      console.log("Wrong type");
  }
  let emailBody = selectedTemplate;
  let emailSubject = "Quote Request Received";
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

async function prepareQuoteBookingEmail(
  idVisitor,
  price,
  deposit_percentage,
  url,
  quote
) {
  let visitor = await visitorDao.getVisitorById(idVisitor);
  let recipient = visitor.email;
  const creationDate = quote.createdAt;

  const formattedCreationDate = creationDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  let emailBody = emailTemplatesStructure.emailTemplates.booking(
    visitor,
    price,
    deposit_percentage,
    url,
    quote,
    formattedCreationDate
  );
  let emailSubject = "Booking Processed";
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

async function prepareQuotePaymentEmail(idVisitor, url, quote) {
  let visitor = await visitorDao.getVisitorById(idVisitor);
  let recipient = visitor.email;
  const creationDate = quote.createdAt;

  const formattedCreationDate = creationDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  let emailBody = emailTemplatesStructure.emailTemplates.payment(
    visitor,
    url,
    quote,
    formattedCreationDate
  );
  let emailSubject = "Payment Process";
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

const updateQuoteStatus = async (id) => {
  return await quoteDao.updateQuoteStatus(id);
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
  sendBookingEmail,
  updateQuoteStatus,
  sendPaymentEmail,
  sendAssign,
  getQuoteById,
  assignDriver,
  assignVehicle,
};
