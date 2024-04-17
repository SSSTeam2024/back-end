const Quote = require("../../models/quoteModel/quote");

const createQuote = async (quoteData) => {
  return await Quote.create(quoteData);
};

const getQuotes = async () => {
  return await Quote.find()
    .populate("id_visitor")
    .populate("id_driver")
    .populate("id_vehicle")
    .populate("company_id")
    .populate("school_id")
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
        progress: "New",
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

const updateProgress = async (id, progress) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        progress: progress
      },
    }
  );
};

const updateStatusToCancel = async (id, status) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        status: status,
        progress: "Cancel",
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

const getQuotesByDriverID = async (id, date) => {
  // Construct the query
const year = date.substring(0, 4);
const month = date.substring(5, 7);
const littleThanMonth = String(Number(month)+1).padStart(2,"0");
const query = {
    "date": { $gt: `${year}-${month}-00` , $lt: `${year}-${littleThanMonth}-00`},
    "id_driver": id
};

// Execute the query
const quotes = await Quote.find(query).populate("id_visitor").populate("checklist_id")

  return quotes;
};

const updateCheckList = async (quote_id, checkList_id) => {
  return await Quote.findByIdAndUpdate(
    { _id: quote_id },
    {
      $set: {
      checklist_id: checkList_id,
      },
    }
  );
};

const getQuoteByIdSchedule = async (id) => {
  const id_schedule= id
  return await Quote.find({id_schedule});
};

const assignDriverAndVehicleToQuoteDao = async (id, driver_ID, vehicle_ID) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        id_vehicle: vehicle_ID,
        id_driver: driver_ID,
        progress: "Allocated",
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
  updateStatusToCancel,
  getQuotesByDriverID,
  updateCheckList,
  updateProgress,
  getQuoteByIdSchedule,
  assignDriverAndVehicleToQuoteDao
};
