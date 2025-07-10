const Offer = require("../../models/offerModel/offerModel");

const createOffer = async (offerData) => {
  const offer = new Offer(offerData);
  return await offer.save();
};

const getOffers = async () => {
  return await Offer.find()
    .populate("contract_id")
    .populate("vehicle_id")
    .populate("driver_id")
    .populate("school_id")
    .populate("company_id");
};

const updateOffer = async (id, updateData) => {
  return await Offer.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteOffer = async (id) => {
  return await Offer.findByIdAndDelete(id);
};

module.exports = {
  createOffer,
  getOffers,
  updateOffer,
  deleteOffer,
};
