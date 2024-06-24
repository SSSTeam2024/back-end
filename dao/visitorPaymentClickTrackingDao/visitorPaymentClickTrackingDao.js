const visPayClickTrack = require("../../models/visitorPaymentClickTrackingModel/visitorPaymentClickTrackingModel");

const createPaymentClickTrackingRecord = async (clickData) => {
  return await visPayClickTrack.create(clickData);
};
//TODO: Complete
const getCheckType = async (id) => {
  return await CheckType.findById(id);
};

module.exports = {
  createPaymentClickTrackingRecord,
  getCheckType,
};
