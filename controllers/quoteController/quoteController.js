const quoteService = require("../../services/quoteServices/quoteService");
const programService = require("../../services/programmServices/programmServices");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");

const createQuote = async (req, res) => {
  try {
    const {
      id_schedule,
      company_id,
      school_id,
      owner,
      handled_by,
      id_driver,
      id_vehicle,
      handled_by_subcontractor,
      id_visitor,
      vehicle_type,
      passengers_number,
      luggage_details,
      journey_type,
      notes,
      heard_of_us,
      pushed_price,
      id_invoice,
      paid_by_client,
      paid_by_bouden,
      status,
      progress,
      balance,
      deposit_percentage,
      deposit_amount,
      manual_cost,
      automatic_cost,
      start_point,
      pickup_time, // Date selected by client ( programmed start date)
      real_start_time, // just time when driver click on go button
      start_delay_time,
      mid_stations,
      delays,
      change_route,
      dropoff_time,
      dropoff_date,
      destination_point,
      type,
      // estimated_return_start_time,
      distance,
      duration,
      total_price,
      checklist_id,
      date,
      return_time,
      return_date,
      return_dropoff_time,
      return_dropoff_date,
      enquiryDate,
      category,
    } = req.body;

    let quote_ref = "";
    const quote = await quoteService.createQuote(
      {
        quote_ref,
        id_schedule,
        company_id,
        school_id,
        owner,
        handled_by,
        id_driver,
        id_vehicle,
        handled_by_subcontractor,
        id_visitor,
        vehicle_type,
        passengers_number,
        luggage_details,
        journey_type,
        notes,
        heard_of_us,
        pushed_price,
        id_invoice,
        paid_by_client,
        paid_by_bouden,
        status,
        manual_cost,
        progress,
        balance,
        deposit_percentage,
        deposit_amount,
        automatic_cost,
        start_point,
        pickup_time,
        real_start_time,
        start_delay_time,
        mid_stations,
        delays,
        change_route,
        dropoff_time,
        dropoff_date,
        destination_point,
        type: "",
        // estimated_return_start_time,
        total_price,
        checklist_id,
        date,
        return_date,
        return_time,
        enquiryDate,
        category,
      },
      distance,
      type,
      return_dropoff_time,
      return_dropoff_date
      //duration,
    );
    res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getQuotes = async (req, res) => {
  try {
    const quotes = await quoteService.getQuotes();
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getQuoteById = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const getQuote = await quoteService.getQuoteById(quoteId);
    if (!getQuote) {
      return res.status(404).send("Quote not found");
    }
    res.json(getQuote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const {
      id_schedule,
      id_corporate,
      owner,
      handled_by,
      id_driver,
      id_vehicle,
      handled_by_subcontractor,
      id_visitor,
      passengers_number,
      luggage_details,
      journey_type,
      notes,
      heard_of_us,
      pushed_price,
      id_invoice,
      paid_by_client,
      paid_by_bouden,
      status,
      manual_cost,
      progress,
      balance,
      deposit,
      automatic_cost,
      start_point,
      estimated_start_time,
      real_start_time,
      start_delay_time,
      mid_stations,
      delays,
      change_route,
      estimated_end_time,
      destination,
      total_price,
      vehicle_type,
      date,
      pickup_time,
      destination_point,
      dropoff_time,
      dropoff_date,
    } = req.body;
    const updatedQuote = await quoteService.updateQuote(quoteId, {
      id_schedule,
      id_corporate,
      owner,
      handled_by,
      id_driver,
      id_vehicle,
      handled_by_subcontractor,
      id_visitor,
      passengers_number,
      luggage_details,
      journey_type,
      notes,
      heard_of_us,
      pushed_price,
      id_invoice,
      paid_by_client,
      paid_by_bouden,
      status,
      progress,
      balance,
      deposit,
      manual_cost,
      automatic_cost,
      start_point,
      estimated_start_time,
      real_start_time,
      start_delay_time,
      mid_stations,
      delays,
      change_route,
      estimated_end_time,
      destination,
      total_price,
      vehicle_type,
      date,
      pickup_time,
      destination_point,
      dropoff_time,
      dropoff_date,
    });

    if (!updatedQuote) {
      return res.status(404).send("Quote not found");
    }
    res.json(updatedQuote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const deletedQuote = await quoteService.deleteQuote(quoteId);
    if (!deletedQuote) {
      return res.status(404).send("Quote not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const sendBookingEmail = async (req, res) => {
  try {
    const {
      id_visitor,
      price,
      quote_id,
      automatic_cost,
      deposit_amount,
      deposit_percentage,
      total_price,
      type,
      return_date,
      return_time,
    } = req.body;
    const sentResult = await quoteService.sendBookingEmail({
      id_visitor,
      price,
      quote_id,
      automatic_cost,
      deposit_amount,
      deposit_percentage,
      total_price,
      type,
      return_date,
      return_time,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const assignDriverAPI = async (req, res) => {
  try {
    const { id_visitor, price, quote_id, id_driver, id_vehicle } = req.body;
    const sentResult = await quoteService.sendAssign({
      id_visitor,
      price,
      quote_id,
      id_driver,
      id_vehicle,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const assignDriverToQuoteAPI = async (req, res) => {
  try {
    const { quote_id, id_driver } = req.body;
    const sentResult = await quoteService.assignDriver({
      quote_id,
      id_driver,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateProgress = async (req, res) => {
  try {
    const { quote_id, progress } = req.body;
    console.log(req.body);
    const sentResult = await quoteService.updateProgress({
      quote_id,
      progress,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const assignVehicleToQuoteAPI = async (req, res) => {
  try {
    const { quote_id, id_vehicle } = req.body;
    const sentResult = await quoteService.assignVehicle({
      quote_id,
      id_vehicle,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateQuoteStatusToCancel = async (req, res) => {
  try {
    const { quoteId, status } = req.body;
    const sentResult = await quoteService.updateToCancel({
      quoteId,
      status,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const sendPaymentEmail = async (req, res) => {
  try {
    const { id_visitor, quote_id } = req.body;
    const sentResult = await quoteService.sendPaymentEmail({
      id_visitor,
      quote_id,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateQuoteStatus = async (req, res) => {
  try {
    const {
      quoteId,
      payment_type,
      visitorPaymentTrackingId,
      payment_mode,
      date,
    } = req.body;

    const updatedQuote = await quoteService.updateQuoteStatus(quoteId);

    if (!updatedQuote) {
      return res.status(404).send("Quote not found");
    }

    res.json({
      link:
        "http://www.coachhirenetwork.co.ukBooking-Success.html?type=" +
        payment_type +
        "&mode=" +
        payment_mode +
        "&date=" +
        date +
        "&id=" +
        visitorPaymentTrackingId,
    });

    // let bookingSuccessPageContent =
    //   emailTemplatesStructure.emailTemplates.booking_success();
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end(bookingSuccessPageContent);
  } catch (error) {
    console.error(error);
    res.end(
      "<div><p>Quote not booked due to an internal error , please try again!<p></div>"
    );
  }
};

const getQuotesByDriver = async (req, res) => {
  try {
    const driver_id = req.params.id;
    const date = req.body.date;
    const quotesByDriver = await quoteService.getQuotesByDriverID(
      driver_id,
      date
    );
    if (!quotesByDriver) {
      return res.status(404).send("No Jobs for this month");
    }
    res.send(quotesByDriver);
  } catch (error) {
    console.error(error);
  }
};

const getQuoteByIdSchedule = async (req, res) => {
  try {
    const id = req.body.id_schedule;
    const quote = await quoteService.getQuoteByIdSchedule(id);
    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    return res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const assignDriverAndVehicleToQuoteAPI = async (req, res) => {
  try {
    const { quote_ID, driver_ID, vehicle_ID } = req.body;
    const sentResult = await quoteService.assignDriverAndVehicleToQuoteService({
      quote_ID,
      driver_ID,
      vehicle_ID,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const assignAffiliateToQuoteAPI = async (req, res) => {
  try {
    const { idQuote, white_list, pushedDate, pushed_price } = req.body;
    const sentResult = await quoteService.assignAffiliateToQuote({
      idQuote,
      white_list,
      pushedDate,
      pushed_price,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const surveyAffiliate = async (req, res) => {
  try {
    const { id_Quote, white_list } = req.body;
    const sentResult = await quoteService.surveyAffiliate({
      id_Quote,
      white_list,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const acceptAssignedAffiliateToQuoteAPI = async (req, res) => {
  try {
    const { idQuote, id_affiliate } = req.body;
    const sentResult = await quoteService.acceptAssignedAffiliateToQuote({
      idQuote,
      id_affiliate,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//getQuotesByIdAffiliate
async function getQuotesByIdAffiliateAPI(req, res) {
  try {
    const { id } = req.params;
    const quote = await quoteService.getQuotesByIdAffiliate(id);
    return res.json(quote);
  } catch (error) {
    console.error("Error in getQuotesByIdAffiliateController:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

const updateAffiliateQuoteStatusToCancel = async (req, res) => {
  try {
    const { quoteId, status } = req.body;
    const sentResult = await quoteService.updateToCancelAffiliate({
      quoteId,
      status,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//delete affiliate quote
const deleteAffiliateQuote = async (req, res) => {
  try {
    const quoteId = req.params.id;
    const deletedQuote = await quoteService.deleteAffiliateQuote(quoteId);
    if (!deletedQuote) {
      return res.status(404).send("Affiliate's Quote not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateAffiliateQuoteProgress = async (req, res) => {
  try {
    const { id_quote, progress } = req.body;
    const sentResult = await quoteService.updateAffiliateProgress({
      id_quote,
      progress,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateAffiliateQuoteStatusToRefuse = async (req, res) => {
  try {
    const { quoteId, affiliateId } = req.body;
    const status = `Refused by affiliate ${affiliateId}`;
    if (!quoteId || !affiliateId) {
      return res.status(400).json({
        success: false,
        message: "Quote ID and affiliate ID are required.",
      });
    }
    const updatedQuote = await quoteService.updateToRefuseAffiliateQuote(
      quoteId,
      status,
      affiliateId
    );
    await updateAffiliateStatus(affiliateId, {
      statusJob: `Refused the quote ${quoteId}`,
      priceJob: "",
      noteAcceptJob: "",
    });

    res.json({ success: true, updatedQuote });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateAffiliateQuoteStatusToAccept = async (req, res) => {
  try {
    const { priceJob, noteAcceptJob, affiliateId } = req.body;
    if (!affiliateId) {
      return res
        .status(400)
        .json({ success: false, message: "Affiliate ID are required." });
    }
    const status = `Accepted by affiliate`;
    const updatedQuote = await quoteService.updateToAcceptAffiliateQuote({
      status,
      priceJob,
      noteAcceptJob,
      affiliateId,
    });

    res.json({ success: true, updatedQuote });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//add driver affiliate
const assignAffiliateDriverToQuoteAPI = async (req, res) => {
  try {
    const { quote_id, id_affiliate_driver } = req.body;
    const sentResult = await quoteService.assignAffiliateDriver({
      quote_id,
      id_affiliate_driver,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//add vehicle affiliate
const assignAffiliateVehicleToQuoteAPI = async (req, res) => {
  try {
    const { quote_id, id_affiliate_vehicle } = req.body;
    const sentResult = await quoteService.assignAffiliateVehicle({
      quote_id,
      id_affiliate_vehicle,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// add driver and vehicle affiliate
const assignAffiliateDriverAndVehicleToQuoteAPI = async (req, res) => {
  try {
    const { quote_ID, affiliateVehicle_ID, affiliateDriver_ID } = req.body;
    const sentResult = await quoteService.addAffiliateDriveAndVehicleToQuote({
      quote_ID,
      affiliateVehicle_ID,
      affiliateDriver_ID,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Send Price And Notes
const sendPriceAndNotes = async (req, res) => {
  try {
    const { idQuote, white_list } = req.body;
    console.log("sendPriceAndNotes", req.body);
    const sentResult = await quoteService.sendPriceandNotes({
      idQuote,
      white_list,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Add Affiliate to existing white list
const addAffiliateToExistingWhiteList = async (req, res) => {
  try {
    const { id_Quote, white_list } = req.body;
    const sentResult = await quoteService.addAffiliateToExistingWhiteList({
      id_Quote,
      white_list,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Delete Affiliate to existing white list
const deleteAffiliateToExistingWhiteList = async (req, res) => {
  try {
    const { QuoteID, whiteListe } = req.body;
    const sentResult = await quoteService.deleteAffiliateToExistingWhiteList({
      QuoteID,
      whiteListe,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Delete White List from Quote and Converted its status to Booked
const deleteWhiteList = async (req, res) => {
  try {
    const { Quote_ID } = req.body;
    console.log(req.body);
    const sentResult = await quoteService.deleteWhiteList({
      Quote_ID,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Send Accept Job Status
const sendJobStatus = async (req, res) => {
  try {
    const { idAffiliate, jobStatus, idQuote } = req.body;
    console.log(req.body);
    const sentResult = await quoteService.sendJobStatus({
      idAffiliate,
      jobStatus,
      idQuote,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// Send Refuse Job Status
const sendRefuseJobStatus = async (req, res) => {
  try {
    const { id_Affiliate, job_Status, id_quote } = req.body;
    const sentResult = await quoteService.sendRefuseJobStatus({
      id_Affiliate,
      job_Status,
      id_quote,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getNewQuotesByDriver = async (req, res) => {
  try {
    const driver_id = req.params.id;
    const quotesByDriver = await quoteService.getNewQuotesByDriverID(driver_id);
    if (!quotesByDriver) {
      return res.status(404).send("No New Jobs for this driver");
    }
    res.send(quotesByDriver);
  } catch (error) {
    console.error(error);
  }
};

const getAcceptedQuotesByDriver = async (req, res) => {
  try {
    const driver_id = req.params.id;
    const quotesByDriver = await quoteService.getAcceptedQuotesByDriverID(
      driver_id
    );
    if (!quotesByDriver) {
      return res.status(404).send("No Accepted Jobs for this driver");
    }
    res.send(quotesByDriver);
  } catch (error) {
    console.error(error);
  }
};

const getRefusedQuotesByDriver = async (req, res) => {
  try {
    const driver_id = req.params.id;
    const quotesByDriver = await quoteService.getRefusedQuotesByDriverID(
      driver_id
    );
    if (!quotesByDriver) {
      return res.status(404).send("No Refused Jobs for this driver");
    }
    res.send(quotesByDriver);
  } catch (error) {
    console.error(error);
  }
};

const getCompletedQuotesByDriver = async (req, res) => {
  try {
    const driver_id = req.params.id;
    const quotesByDriver = await quoteService.getCompletedQuotesByDriverID(
      driver_id
    );
    if (!quotesByDriver) {
      return res.status(404).send("No Completed Jobs for this driver");
    }
    res.send(quotesByDriver);
  } catch (error) {
    console.error(error);
  }
};

// get all quote by id company
const getAllQuotesByCompanyID = async (req, res) => {
  try {
    const company_id = req.params.id;
    const quotes = await quoteService.getAllQuotesByCompanyID(company_id);
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all quote by id school
const getAllQuotesBySchoolID = async (req, res) => {
  try {
    const school_id = req.params.id;
    const quotes = await quoteService.getAllQuotesBySchoolID(school_id);
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all quote by id affiliate in white_list
const getAllSuggestedQuotesByAffiliateID = async (req, res) => {
  try {
    const affiliate_id = req.params.id;
    const quotes = await quoteService.getAllSuggestedQuotesByAffiliateID(
      affiliate_id
    );
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getCompletedJobsFromLast7Days = async (req, res) => {
  try {
    const driver_id = req.params.id;
    const { currentDate } = req.body;
    const last7DaysJobs = await quoteService.getCompletedJobsFromLast7Days(
      driver_id,
      currentDate
    );
    if (!last7DaysJobs) {
      return res
        .status(404)
        .send("No Completed Jobs for the last days from " + currentDate);
    }
    res.send(last7DaysJobs);
  } catch (error) {
    console.error(error);
  }
};

// get all quote by reference
const getAllQuotesByReference = async (req, res) => {
  try {
    const ref = req.params.id;
    const quotes = await quoteService.getAllQuotesByReference(ref);
    res.json(quotes);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all quote by visitor email
const getAllQuotesByVisitorEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const quotes = await quoteService.getAllQuotesByVisitorEmail(email);
    res.json(quotes.filter((quote) => quote.id_visitor));
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all quote by company email
const getAllQuotesByCompanyEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const quotes = await quoteService.getAllQuotesByCompanyEmail(email);
    res.json(quotes.filter((quote) => quote.company_id));
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all quote by school email
const getAllQuotesBySchoolEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const quotes = await quoteService.getAllQuotesBySchoolEmail(email);
    res.json(quotes.filter((quote) => quote.school_id));
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get all quotes by employee id for this month
const getQuotesByEmployee = async (req, res) => {
  try {
    const employee_id = req.params.id;
    const date = req.body.date;
    const quotesByEmployee = await quoteService.getQuotesByEmployeeID(
      employee_id,
      date
    );

    if (!quotesByEmployee || quotesByEmployee.length === 0) {
      return res.status(404).send("No Jobs for this month");
    }

    const filteredQuotes = quotesByEmployee.filter(
      (quote) => quote.id_group_employee
    );
    res.json(filteredQuotes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// get all quotes by student id for this month
const getQuotesByStudent = async (req, res) => {
  try {
    const student_id = req.params.id;
    const date = req.body.date;
    const quotesByStudent = await quoteService.getQuotesByStudentID(
      student_id,
      date
    );

    if (!student_id || quotesByStudent.length === 0) {
      return res.status(404).send("No Jobs for this month");
    }

    const filteredQuotes = quotesByStudent.filter(
      (quote) => quote.id_group_student
    );
    res.json(filteredQuotes);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateQuoteInformation = async (req, res) => {
  const { quoteId } = req.params;
  const { information } = req.body;
  try {
    const updatedQuote = await quoteService.updateQuoteInformation(
      quoteId,
      information
    );
    if (!updatedQuote) {
      return res.status(404).json({ message: "Quote not found" });
    }
    res.json(updatedQuote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
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
  assignDriverAPI,
  getQuoteById,
  assignDriverToQuoteAPI,
  assignVehicleToQuoteAPI,
  updateQuoteStatusToCancel,
  getQuotesByDriver,
  updateProgress,
  getQuoteByIdSchedule,
  assignDriverAndVehicleToQuoteAPI,
  assignAffiliateToQuoteAPI,
  surveyAffiliate,
  acceptAssignedAffiliateToQuoteAPI,
  getQuotesByIdAffiliateAPI,
  updateAffiliateQuoteStatusToCancel,
  deleteAffiliateQuote,
  updateAffiliateQuoteProgress,
  updateAffiliateQuoteStatusToRefuse,
  updateAffiliateQuoteStatusToAccept,
  assignAffiliateVehicleToQuoteAPI,
  assignAffiliateDriverAndVehicleToQuoteAPI,
  assignAffiliateDriverToQuoteAPI,
  sendPriceAndNotes,
  sendJobStatus,
  sendRefuseJobStatus,
  addAffiliateToExistingWhiteList,
  deleteAffiliateToExistingWhiteList,
  deleteWhiteList,
  getNewQuotesByDriver,
  getAcceptedQuotesByDriver,
  getRefusedQuotesByDriver,
  getCompletedQuotesByDriver,
  getAllSuggestedQuotesByAffiliateID,
  getCompletedJobsFromLast7Days,
  getAllQuotesByReference,
  getAllQuotesByVisitorEmail,
  getAllQuotesByCompanyEmail,
  getAllQuotesBySchoolEmail,
  getQuotesByEmployee,
  getQuotesByStudent,
  updateQuoteInformation,
};
