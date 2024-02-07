const Quote = require('../../models/quoteModel/quote');

const createQuote = async (quoteData) => {
  return await Quote.create(quoteData);
};

const getQuotes = async () => {
  return await Quote.find();
};

const updateQuote = async (id, updateData) => {
  return await Quote.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteQuote = async (id) => {
  return await Quote.findByIdAndDelete(id);
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
};
