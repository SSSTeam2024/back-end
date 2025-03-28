const visPayTrackService = require("../../services/visitorPaymentTrackingServices/visitorPaymentTrackingService");

const createPaymentTrackingRecord = async (req, res) => {
  try {
    const id_visitor = req.params.v;
    const id_quote = req.params.q;

    let visPayTrackRec = await visPayTrackService.createPaymentTrackingRecord({
      id_visitor,
      id_quote,
    });

    res.redirect(
      "http://www.coachhirenetwork.co.uk/Booking-Confirmation.html?id=" +
        id_quote
    );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getPaymentTracking = async (req, res) => {
  try {
    const { id_visitor, id_quote } = req.body;
    const paymentTracking = await visPayTrackService.getPaymentTracking({
      id_visitor,
      id_quote,
    });
    res.json(paymentTracking);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getPaymentTrackingById = async (req, res) => {
  try {
    const id = req.params.id;
    const paymentTracking = await visPayTrackService.getPaymentTrackingById(id);
    res.json(paymentTracking);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createPaymentTrackingRecord,
  getPaymentTracking,
  getPaymentTrackingById,
};
