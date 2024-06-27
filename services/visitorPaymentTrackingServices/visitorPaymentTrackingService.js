const visPayTrackDao = require("../../dao/visitorPaymentClickTrackingDao/visitorPaymentClickTrackingDao");

const createPaymentTrackingRecord = async (data) => {
  let visPayTrackRec = await visPayTrackDao.getPaymentTracking(data);
  if (visPayTrackRec.length !== 0) {
    return visPayTrackRec[0];
  } else {
    let newVisPayTrack = await visPayTrackDao.createPaymentClickTrackingRecord(
      data
    );
    let visPayTrackRec = await visPayTrackDao.getPaymentTracking({
      id_visitor: newVisPayTrack.id_visitor._id,
      id_quote: newVisPayTrack.id_quote._id,
    });
    return visPayTrackRec[0];
  }
};

const getPaymentTracking = async (data) => {
  return await visPayTrackDao.getPaymentTracking(data);
};

const getPaymentTrackingById = async (id) => {
  return await visPayTrackDao.getPaymentTrackingById(id);
};

module.exports = {
  createPaymentTrackingRecord,
  getPaymentTracking,
  getPaymentTrackingById,
};
