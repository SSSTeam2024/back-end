const Quote = require("../../models/quoteModel/quote");

const createQuote = async (quoteData) => {
  return await Quote.create(quoteData);
};

const getQuotes = async () => {
  return await Quote.find()
    .populate("id_visitor")
    .populate("id_driver")
    .populate("id_vehicle");
};

const updateQuote = async (id, updateData) => {
  return await Quote.findByIdAndUpdate(id, updateData, { new: true });
};

const getQuoteById = async (id) => {
  return await Quote.findById(id);
};

const deleteQuote = async (id) => {
  return await Quote.findByIdAndDelete(id);
};

const updateQuoteStatus = async (id) => {
  let bookedStatus = "Booked";
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        status: bookedStatus,
      },
    }
  );
};

const updateQuotePrice = async (
  id,
  price,
  deposit_percentage,
  total_price,
  deposit_amount,
  automatic_cost
) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        manual_cost: price,
        progress: "Booked",
        deposit_percentage: deposit_amount,
        total_price: automatic_cost,
        deposit_amount: total_price,
        automatic_cost: price,
      },
    }
  );
};

const updateQuoteDriver = async (id, price, diver, vehicle) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        manual_cost: price,
        balance: price,
        id_vehicle: vehicle,
        id_driver: diver,
        progress: "Allocated",
      },
    }
  );
};

const updateDriver = async (id, diver) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        id_driver: diver,
        progress: "Driver Allocated",
      },
    }
  );
};

const updateVehicle = async (id, vehicle) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        id_vehicle: vehicle,
        progress: "Vehicle Allocated",
      },
    }
  );
};

module.exports = {
  createQuote,
  getQuotes,
  updateQuote,
  deleteQuote,
  updateQuoteStatus,
  getQuoteById,
  updateQuotePrice,
  updateQuoteDriver,
  updateDriver,
  updateVehicle,
};
