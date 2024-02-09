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

const getQuoteById = async (id) => {
  return await Quote.findById(id);
}

const deleteQuote = async (id) => {
  return await Quote.findByIdAndDelete(id);
};

const updateQuoteStatus = async (id) => {
  let bookedStatus = 'Booked';
  return await Quote.findByIdAndUpdate({ _id:id }, {
    $set: {
      status: bookedStatus
    }
  });
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
  updateQuoteStatus,
  getQuoteById
};
