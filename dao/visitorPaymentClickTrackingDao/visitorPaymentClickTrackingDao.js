const visPayClickTrack = require("../../models/visitorPaymentClickTrackingModel/visitorPaymentClickTrackingModel");

const createPaymentClickTrackingRecord = async (clickData) => {
  return await visPayClickTrack.create(clickData);
};

const getPaymentTracking = async (data) => {
  const query = {
    id_visitor: data.id_visitor,
    id_quote: data.id_quote,
  };

  const result = await visPayClickTrack
    .find(query)
    .populate("id_visitor")
    .populate("id_quote");

  return result;
};

const getPaymentTrackingById = async (id) => {
  return await visPayClickTrack
    .findById(id)
    .populate("id_visitor")
    .populate("id_quote");
};

module.exports = {
  createPaymentClickTrackingRecord,
  getPaymentTracking,
  getPaymentTrackingById,
};
