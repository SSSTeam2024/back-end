const QuoteDao = require('../../dao/quoteDao/quoteDao');

const createQuote = async (quoteData) => {
  return await QuoteDao.createQuote(quoteData);
};

const getQuotes = async () => {
  return await QuoteDao.getQuotes();
};

const updateQuote = async (id, updateData) => {
  return await QuoteDao.updateQuote(id, updateData);
};

const deleteQuote = async (id) => {
  return await QuoteDao.deleteQuote(id);
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
};
