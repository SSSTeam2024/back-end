const quoteDao = require("../../dao/quoteDao/quoteDao");
const visitorDao = require("../../dao/visitorDao/visitorDao");
const emailTemplateDao = require("../../dao/emailTemplateDao/emailTemplateDao");
const emailService = require("./emailService");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");
const Quote = require("../../models/quoteModel/quote");
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
        let base_charge =
          dataAllMileageBands[i].vehicle_type.base_change.match(
            /£(\d+(\.\d{1,4})?)/
          );
        let extractedBase_charge = base_charge ? base_charge[1] : null;
        console.log(extractedBase_charge);

        let unitPrice =
          dataAllMileageBands[i].price.match(/£(\d+(\.\d{1,4})?)/);
        let extractedUnitPrice = unitPrice ? unitPrice[1] : null;
        console.log(extractedUnitPrice);

        autoPrice = (
          Number(extractedBase_charge) +
          Number(mileDistance) * Number(extractedUnitPrice)
        ).toFixed(2);
        break;
      }
    }
    let quote_id = quote._id;
    await quoteDao.updateQuotePrice(quote_id, autoPrice);
    let url =
      "https://bouden.uk.oxa.cloud/api/quote/confirm-booking/" + quote_id;
    email = await prepareQuoteBookingEmail(id, autoPrice, url, quote);
  }

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

const getAllQuotes = async () => {
  try {
    const responseAllQuotes = await fetch(
      "https://bouden.uk.oxa.cloud/api/quote/getAllQuotes"
    );

    const dataAllQuotes = await responseAllQuotes.json();
    return dataAllQuotes;
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw error; // rethrow the error to handle it later if needed
  }
};

const getAllPricingCalendar = async () => {
  try {
    const responseAllPricingCalendar = await fetch(
      "https://bouden.uk.oxa.cloud/api/pricingCalendar/getAllPricingCalendars"
    );
    const dataAllPricingCalendar = await responseAllPricingCalendar.json();
    return dataAllPricingCalendar;
  } catch (error) {
    console.error("Error fetching Pricing Calendar:", error);
    throw error; // rethrow the error to handle it later if needed
  }
};

// const processQuote = async (quote) => {
//   try {
//     const allQuotesss = await getAllQuotes();
//     const allPricingCalendaaar = await getAllPricingCalendar();
//     const allMileageBaaands = await getAllMileageBands();
//     let match = allMileageBaaands[0].price.match(/£(\d+(\.\d{1,4})?)/);
//     let extractedValue = match ? match[1] : null;
//     let base_charge =
//       allPricingCalendaaar[1].vehicle_type.base_change.match(
//         /£(\d+(\.\d{1,4})?)/
//       );
//     let extractedBAse_charge = base_charge ? base_charge[1] : null;
//     var R = 3958.8; // Radius of the Earth in miles
//     var rlat1 = quote.start_point.coordinates.lat * (Math.PI / 180); // Convert degrees to radians
//     var rlat2 = quote.destination_point.coordinates.lat * (Math.PI / 180); // Convert degrees to radians
//     var difflat = rlat2 - rlat1; // Radian difference (latitudes)
//     var difflon =
//       (quote.destination_point.coordinates.lon -
//         quote.start_point.coordinates.lon) *
//       (Math.PI / 180); // Radian difference (longitudes)

//     var d =
//       2 *
//       R *
//       Math.asin(
//         Math.sqrt(
//           Math.sin(difflat / 2) * Math.sin(difflat / 2) +
//             Math.cos(rlat1) *
//               Math.cos(rlat2) *
//               Math.sin(difflon / 2) *
//               Math.sin(difflon / 2)
//         )
//       );
//     const convertKmToMiles = (km) => {
//       return km * 0.621371;
//     };

//     let inMiles = convertKmToMiles(d);
//     let pricing =
//       parseFloat(extractedBAse_charge) +
//       (parseFloat(extractedValue) * inMiles +
//         (parseFloat(extractedValue) *
//           inMiles *
//           parseInt(allPricingCalendaaar[1].uplift)) /
//           100);
//     // if (
//     //   quote.estimated_start_time === allPricingCalendaaar[1].startPeriod &&
//     //   quote.vehicle_type === allPricingCalendaaar[1].vehicle_type.type &&
//     //   quote.status !== "Booked"
//     // ) {
//     //   let id = quote.id_visitor;
//     //   let price = Math.round(pricing);
//     //   let quote_id = quote._id;
//     //   await quoteDao.updateQuotePrice(quote_id, price);
//     //   let updatedQuote = await quoteDao.getQuoteById(quote_id);
//     //   let url = "https://bouden.uk.oxa.cloud/api/quote/confirm-booking/" + quote_id;
//     //   let email = await prepareQuoteBookingEmail(id, price, url, updatedQuote);
//     //   await emailService.sendEmail(email);
//     //   return "Booking Email sent!";
//     // }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// const processAllQuotes = async () => {
//   try {
//     const allQuotes = await getAllQuotes();
//     for (const quote of allQuotes) {
//       await processQuote(quote);
//     }
//   } catch (error) {
//     console.error("Error fetching quotes:", error);
//   }
// };

// let allowedCalls = 2;

// const yourFunction = () => {
//   processAllQuotes();
//   allowedCalls--;

//   if (allowedCalls <= 0) {
//     console.log("Function called the maximum allowed times.");
//   }
// };

// const intervalId = setInterval(yourFunction, 10000);

// setTimeout(() => clearInterval(intervalId), allowedCalls * 10000);

const sendBookingEmail = async (bookingData) => {
  let id = bookingData.id_visitor;
  let price = bookingData.price;
  let quote_id = bookingData.quote_id;
  console.log(price);
  await quoteDao.updateQuotePrice(quote_id, price);
  let quote = await quoteDao.getQuoteById(quote_id);
  let url = "https://bouden.uk.oxa.cloud/api/quote/confirm-booking/" + quote_id;
  let email = await prepareQuoteBookingEmail(id, price, url, quote);
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

const sendPaymentEmail = async (paymentData) => {
  let id = paymentData.id_visitor;
  let quote_id = paymentData.quote_id;
  let quote = await quoteDao.getQuoteById(quote_id);
  let url =
    "https://bouden.uk.oxa.cloud/api/quote/quote-payment/4fe5t1g44f6d5f748ds654fs97fsd4fs8df764h6j78ty";
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

async function prepareQuoteBookingEmail(idVisitor, price, url, quote) {
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
};
