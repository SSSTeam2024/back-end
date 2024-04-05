const quoteService = require("../../services/quoteServices/quoteService");
const programService = require("../../services/programmServices/programmServices");
const emailTemplatesStructure = require("../../utils/emailTemplatesStructure");

const createQuote = async (req, res) => {
  try {
    const {
      id_schedule,
      id_corporate,
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
      enquiryDate,
      category
    } = req.body;
    console.log(req.body)
    const quote = await quoteService.createQuote(
      {
        id_schedule,
        id_corporate,
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
        type,
        // estimated_return_start_time,
        total_price,
        checklist_id,
        date,
        return_date,
      return_time,
      enquiryDate,
      category
      },
      distance,
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
    } = req.body;
    const sentResult = await quoteService.sendBookingEmail({
      id_visitor,
      price,
      quote_id,
      automatic_cost,
      deposit_amount,
      deposit_percentage,
      total_price,
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
    const { quote_id, status } = req.body;
    const sentResult = await quoteService.updateToCancel({
      quote_id,
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
    const quoteId = req.params.id;

    const updatedQuote = await quoteService.updateQuoteStatus(quoteId);

    if (!updatedQuote) {
      return res.status(404).send("Quote not found");
    }
    console.log(updatedQuote);
    let bookingSuccessPageContent =
      emailTemplatesStructure.emailTemplates.booking_success();
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(bookingSuccessPageContent);
  } catch (error) {
    console.error(error);
    //res.status(500).send(error.message);
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

module.exports = {
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
  updateProgress
};
