const OfferService = require("../../models/offerServicesModel/offerServicesModel");

const createOfferService = async (offerServiceData) => {
  const offerService = new OfferService(offerServiceData);
  return await offerService.save();
};

const getOfferService = async () => {
  return await OfferService.find();
};

const updateOfferService = async (id, updateData) => {
  return await OfferService.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteOfferService = async (id) => {
  return await OfferService.findByIdAndDelete(id);
};

const addCardToOfferService = async (valueId, newCard) => {
  return await OfferService.findByIdAndUpdate(
    valueId,
    { $push: { cards: newCard } },
    { new: true }
  );
};

const getOfferServiceById = async (id) => {
  return await OfferService.findById(id);
};

module.exports = {
  createOfferService,
  getOfferService,
  updateOfferService,
  deleteOfferService,
  addCardToOfferService,
  getOfferServiceById,
};
