const quoteDao = require("../../dao/quoteDao/quoteDao");
const visitorDao = require("../../dao/visitorDao/visitorDao");
const affiliateDao = require("../../dao/affiliateDao/affiliateDao");
const emailService = require("./emailService");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");
const modeDao = require("../../dao/modeDao/modeDao");
const mileageBandDao = require("../../dao/mileageBandDao/mileageBandDao");
const notificationDao = require("../../dao/notificationQuoteDao/notificationDao");
const vehicleServices = require("../../services/vehicleServices/vehicleService");
const driverServices = require("../../services/driverServices/driverService");
const onesignalService = require("../oneSignalServices/oneSignalDriverServices");
const onesignalEmployeeService = require("../oneSignalServices/oneSignalEmployeeServices");
const oneSignalStudentServices = require("../oneSignalServices/oneSignalStudentServices");
const {
  updateAffiliateStatus,
} = require("../affiliateServices/affiliateService");

const convertMeterToMiles = (m) => {
  return m * 0.000621371;
};

const createQuote = async (
  quoteData,
  distance,
  type,
  return_dropoff_time,
  return_dropoff_date
) => {
  let id = quoteData.id_visitor;

  let latestQuote = await quoteDao.getLatestQuote();
  let newQuoteRef;
  if (!latestQuote) {
    newQuoteRef = "001001";
  } else {
    newQuoteRef = Number(latestQuote.quote_ref) + 1;
  }

  let quote = await quoteDao.createQuote({
    ...quoteData,
    quote_ref: String(newQuoteRef).padStart(6, "0"),
    type: "One way",
  });

  let quote_two;
  if (type === "Return") {
    quote_two = await quoteDao.createQuote({
      ...quoteData,
      quote_ref: String(newQuoteRef).padStart(6, "0"),
      type: "Return",
      pickup_time: quoteData.return_time,
      date: quoteData.return_date,
      dropoff_time: return_dropoff_time,
      dropoff_date: return_dropoff_date,
      start_point: quoteData.destination_point,
      destination_point: quoteData.start_point,
    });
  }

  let modes = await modeDao.getModes();
  let priceMode = modes[0].type;
  let email = "";
  let emailToAdmin = "";
  let autoPrice = 0;
  if (priceMode === "0") {
    console.log("email", email);
    email = await prepareAfterQuoteCreationEmail(
      id,
      quote,
      type,
      quoteData.return_time,
      quoteData.return_date
    );
    console.log("emailToAdmin", emailToAdmin);
    emailToAdmin = await prepareAfterQuoteEmailToAdmin(
      id,
      quote,
      type,
      quoteData.return_time,
      quoteData.return_date
    );
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
        let base_charge =
          selectedBand.vehicle_type?.base_change.match(/£(\d+(\.\d{1,4})?)/);
        let extractedBase_charge = base_charge ? base_charge[1] : null;
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
    let deposit_percentage = 30;
    await quoteDao.updateQuotePrice(quote_id, autoPrice);
    let url =
      "http://57.128.184.217:3000/api/visitor-payment/create-payment-tracking-record" +
      "/" +
      id._id +
      "/" +
      quote_id;
    email = await prepareQuoteBookingEmail(
      id,
      autoPrice,
      deposit_percentage,
      url,
      quote,
      type,
      quoteData.return_time,
      quoteData.return_date
    );
  }
  try {
    await emailService.sendEmail(email);
    await emailService.sendEmailToAdmin(emailToAdmin);
  } catch (error) {
    console.log("error while sending email", error);
  }

  const notification = {
    message: `New Quote Created: ${quote.quote_ref}`,
    quote_id: quote._id,
    typeNotif: "quote_created",
    lu: "0",
    timestamp: new Date(),
  };

  await notificationDao.createNotification(notification);
  global.io.emit("notification", notification);

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
  console.log("bookingData", bookingData);
  let id = bookingData.id_visitor;
  let price = bookingData.price;
  let quote_id = bookingData.quote_id;
  let auto_price = bookingData.automatic_cost;
  let deposit_amount = bookingData.deposit_amount;
  let deposit_percentage = bookingData.deposit_percentage;
  let total_price = bookingData.total_price;
  let type = bookingData.type;
  let return_time = bookingData.return_time;
  let return_date = bookingData.return_date;

  await quoteDao.updateQuotePrice(
    quote_id,
    price,
    auto_price,
    deposit_amount,
    deposit_percentage,
    total_price
  );
  let quote = await quoteDao.getQuoteById(quote_id);
  console.log("quote_id", quote_id);
  let url =
    "http://57.128.184.217:3000/api/visitor-payment/create-payment-tracking-record/" +
    id._id +
    "/" +
    quote_id;
  let email = await prepareQuoteBookingEmail(
    id,
    price,
    deposit_percentage,
    url,
    quote,
    type,
    return_date,
    return_time
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
  let quote_infos = await quoteDao.getQuoteById(quote_id);
  let driver = bookingData.id_driver;
  let driver_infos = await driverServices.getDriverById(driver);
  const onesignal_notification = {
    contents: `Ref : ${quote_infos.quote_ref} at ${quote_infos.date} from ${quote_infos.pickup_time} to ${quote_infos.dropoff_time}`,
    title: "New Job Assigned",
    users: [driver_infos.onesignal_api_key],
  };
  await quoteDao.updateDriver(quote_id, driver);

  await onesignalService.sendNotification(onesignal_notification);
  return "Driver Assigned!!";
};

const updateProgress = async (updateData) => {
  let quote_id = updateData.quote_id;
  let progress = updateData.progress;
  if (progress === "On Route") {
    let quote_infos = await quoteDao.getQuoteById(quote_id);
    const onesignal_notification = {
      contents: `Ref : ${quote_infos.quote_ref} at ${quote_infos.date} from ${quote_infos.pickup_time} to ${quote_infos.dropoff_time}`,
      title: "Driver On Route",
      users: [],
    };
    if (quote_infos.id_group_employee !== null) {
      for (const employee of quote_infos.id_group_employee.employees) {
        onesignal_notification.users.push(employee.onesignal_api_key);
      }
      await onesignalEmployeeService.sendNotification(onesignal_notification);
    }
    if (quote_infos.id_group_student !== null) {
      for (const student of quote_infos.id_group_student.students) {
        onesignal_notification.users.push(student.onesignal_api_key);
      }
      await oneSignalStudentServices.sendNotification(onesignal_notification);
    }
  }
  await quoteDao.updateProgress(quote_id, progress);
  return "Progress Updated!!";
};

const updateToCancel = async (updateData) => {
  let quoteId = updateData.quoteId;
  let status = updateData.status;
  await quoteDao.updateStatusToCancel(quoteId, status);
  return "Quote Canceled!!";
};

const assignVehicle = async (bookingData) => {
  let quote_id = bookingData.quote_id;
  let quote_infos = await quoteDao.getQuoteById(quote_id);
  let vehicle = bookingData.id_vehicle;
  let vehicle_infos = await vehicleServices.getVehicleById(vehicle);

  if (quote_infos.id_driver !== null) {
    const onesignal_notification = {
      contents: `Ref : ${quote_infos.quote_ref} at ${quote_infos.date} from ${quote_infos.pickup_time} to ${quote_infos.dropoff_time}.\nVehicle: ${vehicle_infos.registration_number}`,
      title: "New Vehicle Assigned",
      users: [quote_infos.id_driver.onesignal_api_key],
    };
    await onesignalService.sendNotification(onesignal_notification);
  }
  await quoteDao.updateVehicle(quote_id, vehicle);

  return "Vehicle Assigned!!";
};

const getQuotesByDriverID = async (id, date) => {
  return await quoteDao.getQuotesByDriverID(id, date);
};

const sendPaymentEmail = async (paymentData) => {
  let id = paymentData.id_visitor;
  let quote_id = paymentData.quote_id;
  let quote = await quoteDao.getQuoteById(quote_id);
  let url =
    `http://www.coachhirenetwork.co.uk/Booking-Payment.html?id=` + quote_id;
  let email = await prepareQuotePaymentEmail(id, url, quote);
  await emailService.sendEmail(email);
  return "Payment Email sent!";
};

async function prepareAfterQuoteCreationEmail(
  idVisitor,
  quote,
  type,
  return_time,
  return_date
) {
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
  switch (type) {
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
          formattedCreationDate,
          return_time,
          return_date
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

async function prepareAfterQuoteEmailToAdmin(
  idVisitor,
  quote,
  type,
  return_time,
  return_date
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

  let emailBody =
    emailTemplatesStructure.emailTemplates.admin_email_quote_received(
      visitor,
      quote,
      formattedCreationDate
    );
  let emailSubject = "New Quote Request Received";
  let fullEmailObject = {
    to: "sales@coachhirenetwork.co.uk",
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
  quote,
  type,
  return_date,
  return_time
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
  let selectedTemplate = "";
  switch (type) {
    case "One way":
      selectedTemplate = emailTemplatesStructure.emailTemplates.bookingOneWay(
        visitor,
        price,
        deposit_percentage,
        url,
        quote,
        formattedCreationDate
      );
      break;
    case "Return":
      selectedTemplate =
        emailTemplatesStructure.emailTemplates.bookingWithReturn(
          visitor,
          price,
          deposit_percentage,
          url,
          quote,
          formattedCreationDate,
          return_date,
          return_time
        );
      break;
    default:
      console.log("Wrong type");
  }
  let emailBody = selectedTemplate;
  let emailSubject = "Quote Ready";
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

const updateQuoteStatus = async (id, paymentType, paymentMode) => {
  let quote = await quoteDao.getQuoteById(id);
  let quotes = await quoteDao.getAllQuotesByReference(quote.quote_ref);
  quotes.forEach(async (qt) => {
    if (qt.type === "Return") {
      await quoteDao.updateQuoteStatus(qt._id);
    }
  });
  return await quoteDao.updateQuoteStatus(id, paymentType, paymentMode);
};

const getQuoteByIdSchedule = async (id) => {
  return await quoteDao.getQuoteByIdSchedule(id);
};

const assignDriverAndVehicleToQuoteService = async (bookingData) => {
  let quote_id = bookingData.quote_ID;
  let quote_infos = await quoteDao.getQuoteById(quote_id);
  let driver = bookingData.driver_ID;
  let vehicle = bookingData.vehicle_ID;
  let driver_infos = await driverServices.getDriverById(driver);
  let vehicle_infos = await vehicleServices.getVehicleById(vehicle);

  await quoteDao.assignDriverAndVehicleToQuoteDao(quote_id, driver, vehicle);
  const onesignal_notification = {
    contents: `Ref : ${quote_infos.quote_ref} at ${quote_infos.date} from ${quote_infos.pickup_time} to ${quote_infos.dropoff_time}.\nVehicle: ${vehicle_infos.registration_number}`,
    title: "New Job And Vehicle Assigned",
    users: [driver_infos.onesignal_api_key],
  };
  await onesignalService.sendNotification(onesignal_notification);
  return "Driver and Vehicle Assigned!!";
};

const assignAffiliateToQuote = async (bookingData) => {
  let idQuote = bookingData.idQuote;
  let affiliate = bookingData.white_list;
  let pushedDate = bookingData.pushedDate;
  let pushed_price = bookingData.pushed_price;
  await quoteDao.assignAffiliate(idQuote, affiliate, pushedDate, pushed_price);
  return "Affiliate Assigned!!";
};

const surveyAffiliate = async (bookingData) => {
  let id_Quote = bookingData.id_Quote;
  let affiliate = bookingData.white_list;
  await quoteDao.surveyAffiliate(id_Quote, affiliate);
  return "Survey Affiliate!!";
};

const acceptAssignedAffiliateToQuote = async (acceptData) => {
  let idQuote = acceptData.idQuote;
  let id_affiliate = acceptData.id_affiliate;
  await quoteDao.acceptAssignedAffiliate(idQuote, id_affiliate);
  let affiliate = await affiliateDao.getAffiliateById(id_affiliate);
  let quote = await quoteDao.getQuoteById(idQuote);
  let url = `http://57.128.184.217:3000/api/quote/job-accepted/` + idQuote;
  let email = await prepareQuoteAffiliateAcceptence(affiliate, url, quote);
  await emailService.sendEmail(email);
  return "Quote Pushed To Affiliate Acceptence Email sent!";
};

//add affiliate driver and vehicle
const addAffiliateDriveAndVehicleToQuote = async (bookingData) => {
  let quote_id = bookingData.quote_ID;
  let driver = bookingData.affiliateDriver_ID;
  let vehicle = bookingData.affiliateVehicle_ID;
  await quoteDao.assignAffiliateDriverAndVehicleToQuoteDao(
    quote_id,
    vehicle,
    driver
  );
  return "Driver and Vehicle Assigned!!";
};

const assignAffiliateDriver = async (bookingData) => {
  let quote_id = bookingData.quote_id;
  let driver = bookingData.id_affiliate_driver;
  console.log("Services", quote_id, driver);
  await quoteDao.addAffiliateDriverToQuoteDao(quote_id, driver);
  return "Driver Assigned!!";
};

//add driver affiliate to quote
const addAffiliateDriverToQuote = async (bookingData) => {
  let quote_id = bookingData.quote_ID;
  let driver = bookingData.affiliateDriver_ID;
  await quoteDao.addAffiliateDriverToQuoteDao(quote_id, driver);
  return "Driver Assigned!!";
};

//add vehicle affiliate to quote
const addAffiliateVehicleToQuote = async (bookingData) => {
  let quote_id = bookingData.quote_ID;
  let vehicle = bookingData.affiliateVehicle_ID;
  await quoteDao.addAffiliateVehicleToQuote(quote_id, vehicle);
  return "Vehicle Assigned!!";
};

// get quotes by id aafiliate
async function getQuotesByIdAffiliate(id) {
  try {
    const quotes = await quoteDao.getQuotesByIdAffiliate(id);
    console.log(id);
    return quotes;
  } catch (error) {
    console.error("Error in getQuotesByIdAffiliate service:", error);
    throw error;
  }
}

const updateAffiliateProgress = async (updateData) => {
  let id_quote = updateData.id_quote;
  let progress = updateData.progress;
  await quoteDao.updateAffiliateProgress(id_quote, progress);
  return "Progress Updated!!";
};

const updateToCancelAffiliate = async (updateData) => {
  let quoteId = updateData.quoteId;
  let status = updateData.status;
  await quoteDao.updateStatusAffiliateQuoteToCancel(quoteId, status);
  return "Quote Canceled!!";
};

const assignAffiliateVehicle = async (bookingData) => {
  let quote_id = bookingData.quote_id;
  let vehicle = bookingData.id_affiliate_vehicle;
  await quoteDao.updateAffiliateVehicle(quote_id, vehicle);
  return "Vehicle Assigned!!";
};

const updateStatusAffiliateQuoteToCancel = async (id) => {
  return await quoteDao.updateStatusAffiliateQuoteToCancel(id);
};

const deleteAffiliateQuote = async (id) => {
  return await quoteDao.deleteAffiliateQuote(id);
};

const updateToRefuseAffiliateQuote = async (quoteId, status, affiliateId) => {
  try {
    await quoteDao.updateStatusAffiliateQuoteToRefuse(
      quoteId,
      status,
      affiliateId
    );
    return "Quote Refused!!";
  } catch (error) {
    throw new Error(
      "Failed to update quote status to refuse: " + error.message
    );
  }
};

const updateToAcceptAffiliateQuote = async ({
  quoteId,
  status,
  priceJob,
  noteAcceptJob,
  affiliateId,
}) => {
  try {
    const quote = await quoteDao.getQuoteById(quoteId);
    const proposedPrice = quote.proposed_price;

    await quoteDao.updateStatusAffiliateQuoteToAccept(
      quoteId,
      status,
      priceJob || proposedPrice,
      noteAcceptJob
    );
    await updateAffiliateStatus(affiliateId, {
      statusJob: `Affiliate accepts the quote ${quoteId}`,
      priceJob: priceJob || proposedPrice,
      noteAcceptJob: noteAcceptJob,
    });
    return "Quote Accepted!!";
  } catch (error) {
    throw new Error(
      "Failed to update quote status to accept: " + error.message
    );
  }
};

const sendPriceandNotes = async (acceptData) => {
  let idQuote = acceptData.idQuote;
  let white_list = acceptData.white_list;

  await quoteDao.sendPriceAndNotes(idQuote, white_list);
  return "Success Send Price!!";
};

// Service for Add Affiliate To Existing White List
const addAffiliateToExistingWhiteList = async (addData) => {
  let id_Quote = addData.id_Quote;
  let white_list = addData.white_list;

  await quoteDao.addAffiliateToExistingWhiteList(id_Quote, white_list);
  return "Success Add Affiliate To White List!!";
};

// Service for Delete Affiliate To Existing White List
const deleteAffiliateToExistingWhiteList = async (deleteData) => {
  let QuoteID = deleteData.QuoteID;
  let whiteListe = deleteData.whiteListe;
  await quoteDao.deleteAffiliateToExistingWhiteList(QuoteID, whiteListe);
  return "Success Delete Affiliate To White List!!";
};

// Service for Delete WhiteLis
const deleteWhiteList = async (deleteData) => {
  let Quote_ID = deleteData.Quote_ID;
  await quoteDao.deleteWhiteList(Quote_ID);
  return "Success Delete White List!!";
};

function subtractTenMinutes(timeString) {
  // Parse the time string into hours and minutes
  const [hours, minutes] = timeString.split(":").map(Number);

  // Convert hours and minutes into total minutes
  const totalMinutes = hours * 60 + minutes;

  // Subtract 10 minutes
  const newTotalMinutes = totalMinutes - 10;

  // Ensure the result is not negative
  const finalTotalMinutes = Math.max(0, newTotalMinutes);

  // Calculate new hours and minutes
  const newHours = Math.floor(finalTotalMinutes / 60);
  const newMinutes = finalTotalMinutes % 60;

  // Format the result back into "HH:MM" format
  const newTimeString = `${String(newHours).padStart(2, "0")}:${String(
    newMinutes
  ).padStart(2, "0")}`;

  return newTimeString;
}

async function prepareQuoteAffiliateAcceptence(affiliate, url, quote) {
  let recipient = affiliate.email;
  const creationDate = quote.createdAt;
  const on_site_before = subtractTenMinutes(quote.pickup_time);

  const formattedCreationDate = creationDate.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  let emailBody = emailTemplatesStructure.emailTemplates.affiliateJobAcceptence(
    affiliate,
    url,
    quote,
    on_site_before,
    formattedCreationDate
  );
  let emailSubject = "Job Accepted";
  let fullEmailObject = {
    to: recipient,
    subject: emailSubject,
    body: emailBody,
  };
  return fullEmailObject;
}

const sendJobStatus = async (acceptData) => {
  let idAffiliate = acceptData.idAffiliate;
  let jobStatus = acceptData.jobStatus;
  let idQuote = acceptData.idQuote;
  await quoteDao.sendJobStatus(idAffiliate, jobStatus, idQuote);
  return "Success Send Price!!";
};

const sendRefuseJobStatus = async (acceptData) => {
  let id_Affiliate = acceptData.id_Affiliate;
  let job_Status = acceptData.job_Status;
  let id_quote = acceptData.id_quote;
  await quoteDao.sendRefuseJobStatus(id_Affiliate, job_Status, id_quote);
  return "Success Send Price!!";
};

const getNewQuotesByDriverID = async (id) => {
  return await quoteDao.getNewQuotesByDriverID(id);
};

const getAcceptedQuotesByDriverID = async (id) => {
  return await quoteDao.getAcceptedQuotesByDriverID(id);
};

const getRefusedQuotesByDriverID = async (id) => {
  return await quoteDao.getRefusedQuotesByDriverID(id);
};

const getCompletedQuotesByDriverID = async (id) => {
  return await quoteDao.getCompletedQuotesByDriverID(id);
};

const getAllQuotesByCompanyID = async (id) => {
  return await quoteDao.getAllQuotesByCompanyID(id);
};

const getAllQuotesBySchoolID = async (id) => {
  return await quoteDao.getAllQuotesBySchoolID(id);
};

const getAllSuggestedQuotesByAffiliateID = async (id) => {
  return await quoteDao.getAllSuggestedQuotesByAffiliateID(id);
};

const getCompletedJobsFromLast7Days = async (driver_id, currentDate) => {
  return await quoteDao.getCompletedJobsFromLast7Days(driver_id, currentDate);
};

const getAllQuotesByReference = async (id) => {
  return await quoteDao.getAllQuotesByReference(id);
};

const getAllQuotesByVisitorEmail = async (email) => {
  return await quoteDao.getAllQuotesByVisitorEmail(email);
};

const getAllQuotesByCompanyEmail = async (email) => {
  return await quoteDao.getAllQuotesByCompanyEmail(email);
};

const getAllQuotesBySchoolEmail = async (email) => {
  return await quoteDao.getAllQuotesBySchoolEmail(email);
};

const getQuotesByEmployeeID = async (id, date) => {
  return await quoteDao.getQuotesByEmployeeID(id, date);
};

const getQuotesByStudentID = async (id, date) => {
  return await quoteDao.getQuotesByStudentID(id, date);
};

const updateQuoteInformation = async (quoteId, information) => {
  return await quoteDao.updateQuoteInformation(quoteId, information);
};

module.exports = {
  getAllQuotesByCompanyID,
  getAllQuotesBySchoolID,
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
  updateToCancel,
  getQuotesByDriverID,
  updateProgress,
  getQuoteByIdSchedule,
  assignDriverAndVehicleToQuoteService,
  assignAffiliateToQuote,
  surveyAffiliate,
  acceptAssignedAffiliateToQuote,
  addAffiliateDriveAndVehicleToQuote,
  addAffiliateDriverToQuote,
  addAffiliateVehicleToQuote,
  getQuotesByIdAffiliate,
  updateAffiliateProgress,
  updateToCancelAffiliate,
  assignAffiliateVehicle,
  updateStatusAffiliateQuoteToCancel,
  deleteAffiliateQuote,
  updateToRefuseAffiliateQuote,
  updateToAcceptAffiliateQuote,
  assignAffiliateDriver,
  sendPriceandNotes,
  sendJobStatus,
  sendRefuseJobStatus,
  addAffiliateToExistingWhiteList,
  deleteAffiliateToExistingWhiteList,
  deleteWhiteList,
  getNewQuotesByDriverID,
  getAcceptedQuotesByDriverID,
  getRefusedQuotesByDriverID,
  getCompletedQuotesByDriverID,
  getAllSuggestedQuotesByAffiliateID,
  getCompletedJobsFromLast7Days,
  getAllQuotesByReference,
  getAllQuotesByVisitorEmail,
  getAllQuotesByCompanyEmail,
  getAllQuotesBySchoolEmail,
  getQuotesByEmployeeID,
  getQuotesByStudentID,
  updateQuoteInformation,
};
