const quoteService = require("../../services/quoteServices/quoteService");
const Quote = require("../../models/quoteModel/quote");

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
      destination_point,
      type,
      estimated_return_start_time,
    } = req.body;

    const quote = await quoteService.createQuote({
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
      automatic_cost,
      start_point,
      estimated_start_time,
      real_start_time,
      start_delay_time,
      mid_stations,
      delays,
      change_route,
      estimated_end_time,
      destination_point,
      type,
      estimated_return_start_time,
    });
    res.json(quote);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getQuotes = async (req, res) => {
  try {
    const quotes = await quoteService.getQuotes();
    res.json({ quotes });
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
    const { id_visitor, price, quote_id } = req.body;
    const sentResult = await quoteService.sendBookingEmail({
      id_visitor,
      price,
      quote_id,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getQuoteByIdSchedule = async (req, res) => {
  try {
    const id = req.body.id_schedule;
    console.log("quote controller", id);
    const quote = await quoteService.getQuoteByIdSchedule(id);

    console.log("quote controller", quote);
    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }

    return res.json(quote);
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

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
  getQuoteById,
  sendBookingEmail,
  getQuoteByIdSchedule,
};
