const pricingCalendarService = require("../../services/pricingCalendarServices/pricingCalendarServices");

const createPricingCalendar = async (req, res) => {
  try {
    const {
      name,
      vehicle_type,
      priority,
      exclusive,
      accountCompany,
      accountSchool,
      accountPassenger,
      startDate,
      startTime,
      endDate,
      endTime,
      days,
      uplift,
      endPeriod,
      allAccounts,
      allVehicles,
      startPeriod,
    } = req.body;

    await pricingCalendarService.createPricingCalendar({
      name,
      vehicle_type,
      priority,
      exclusive,
      accountCompany,
      accountSchool,
      accountPassenger,
      startDate,
      startTime,
      endDate,
      endTime,
      days,
      uplift,
      endPeriod,
      allAccounts,
      allVehicles,
      startPeriod,
    });
    console.log(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getPricingCalendars = async (req, res) => {
  try {
    const pricingCalendars = await pricingCalendarService.getPricingCalendars();
    res.json(pricingCalendars);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getPricingCalendarById = async (req, res) => {
  try {
    const luxuryId = req.params.id;

    const getLuxury = await pricingCalendarService.getPricingCalendarById(
      luxuryId
    );

    if (!getLuxury) {
      return res.status(404).send("Pricing Calendar not found");
    }
    res.json(getLuxury);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updatePricingCalendar = async (req, res) => {
  try {
    const luxuryId = req.params.id;
    const { name } = req.body;

    const updatedLuxury = await pricingCalendarService.updatePricingCalendar(
      luxuryId,
      { name }
    );

    if (!updatedLuxury) {
      return res.status(404).send("Pricing Calendar not found");
    }
    res.json(updatedLuxury);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deletePricingCalendar = async (req, res) => {
  try {
    const pricingCalendarId = req.params.id;

    const deletedPricingCalendar =
      await pricingCalendarService.deletePricingCalendar(pricingCalendarId);

    if (!deletedPricingCalendar) {
      return res.status(404).send("Pricing Calendar not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createPricingCalendar,
  getPricingCalendars,
  getPricingCalendarById,
  updatePricingCalendar,
  deletePricingCalendar,
};
