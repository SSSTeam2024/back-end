const PricingCalendar = require("../../models/pricingCalendarModels/pricingCalendar");

const createPricingCalendar = async (pricingCalendarData) => {
  return await PricingCalendar.create(pricingCalendarData);
};

const getPricingCalendars = async () => {
  return await PricingCalendar.find()
    .populate("vehicle_type")
    .populate("accountCompany")
    .populate("accountSchool")
    .populate("accountPassenger");
};

const getPricingCalendarById = async (id) => {
  return await PricingCalendar.findById(id);
};

const getPricingCalendarByName = async (name) => {
  return await PricingCalendar.findOne({ name });
};

const updatePricingCalendar = async (id, updateData) => {
  return await PricingCalendar.findByIdAndUpdate(id, updateData, { new: true });
};

const deletePricingCalendar = async (id) => {
  return await PricingCalendar.findByIdAndDelete(id);
};

module.exports = {
  createPricingCalendar,
  getPricingCalendars,
  getPricingCalendarById,
  getPricingCalendarByName,
  updatePricingCalendar,
  deletePricingCalendar,
};
