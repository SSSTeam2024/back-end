const Quote = require('../../models/quoteModel/quote');

const createQuote = async (quoteData) => {
  return await Quote.create(quoteData);
};

const getQuotes = async () => {
  return await Quote.find().populate('id_visitor').populate('id_driver').populate('id_vehicle')
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

const updateQuotePrice = async (id,price) => {
  return await Quote.findByIdAndUpdate({ _id:id }, {
    $set: {
      manual_cost: price
    }
  });
};

const updateQuoteDriver = async (id,price, diver, vehicle) => {
  return await Quote.findByIdAndUpdate({ _id:id }, {
    $set: {
      manual_cost: price,
      balance: price,
      id_vehicle: vehicle,
      id_driver: diver,
      progress: "Allocated"
    }
  });
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
  updateQuoteStatus,
  getQuoteById,
  updateQuotePrice,
  updateQuoteDriver
};
