const pricingCalendarDao = require("../../dao/pricingCalendarDao/pricingCalendarDao");

const createPricingCalendar = async (pricingCalendarData) => {
  return await pricingCalendarDao.createPricingCalendar(pricingCalendarData);
};

const getPricingCalendars = async () => {
  return await pricingCalendarDao.getPricingCalendars();
};

const getPricingCalendarById = async (id) => {
  return await pricingCalendarDao.getPricingCalendarById(id);
};

const updatePricingCalendar = async (id, updateData) => {
  return await pricingCalendarDao.updatePricingCalendar(id, updateData);
};

const deletePricingCalendar = async (id) => {
  return await pricingCalendarDao.deletePricingCalendar(id);
};

module.exports = {
  createPricingCalendar,
  getPricingCalendars,
  getPricingCalendarById,
  updatePricingCalendar,
  deletePricingCalendar,
};
