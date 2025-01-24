const BestOffer = require("../../models/bestOfferComponentModel/bestOfferComponentModel");

const createBestOffer = async (bestOfferData) => {
  const bestOffer = new BestOffer(bestOfferData);
  return await bestOffer.save();
};

const getBestOffer = async () => {
  return await BestOffer.find();
};

const updateBestOffer = async (id, updateData) => {
  return await BestOffer.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteBestOffer = async (id) => {
  return await BestOffer.findByIdAndDelete(id);
};

const addCardToBestOffer = async (valueId, newTabs) => {
  return await BestOffer.findByIdAndUpdate(
    valueId,
    { $push: { tabs: newTabs } },
    { new: true }
  );
};

const getBestOfferById = async (id) => {
  return await BestOffer.findById(id);
};

module.exports = {
  createBestOffer,
  getBestOffer,
  updateBestOffer,
  deleteBestOffer,
  addCardToBestOffer,
  getBestOfferById,
};
