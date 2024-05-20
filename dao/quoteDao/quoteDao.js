const Quote = require("../../models/quoteModel/quote");
const Affiliate = require('../../models/affiliateModels/affiliate');

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
    .populate("id_affiliate")
    .populate("id_affiliate_driver")
    .populate("id_affiliate_vehicle")
    .populate({
      path: "white_list",
      populate: {
        path: "vehicles",
      }
    })
    .populate("id_group_employee")
    .populate("id_group_student")
};

const updateQuote = async (id, updateData) => {
  return await Quote.findByIdAndUpdate(id, updateData, { new: true });
};

const getQuoteById = async (id) => {
  return await Quote.findById(id).populate("id_affiliate_driver")
  .populate("id_affiliate_vehicle")
  .populate({
    path: "white_list",
    populate: {
      path: "vehicles",
    }
  })
  .populate("affiliate_id")
  .populate("id_affiliate")
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
        progress: "Booked"
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
        status: "Allocated",
      },
    }
  );
};

const updateDriver = async (id, diver) => {
  const quote = await Quote.findById(id)
  if(quote.id_vehicle === null) {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_driver: diver,
          status: "Driver Allocated",
        },
      }
    );
  }
  else {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_driver: diver,
          status: "Allocated",
        },
      }
    );
  }
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
  const quote = await Quote.findById(id)
  if(quote.id_driver === null) {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        id_vehicle: vehicle,
        status: "Vehicle Allocated",
      },
    }
  );
}
else {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        id_vehicle: vehicle,
        status: "Allocated",
      },
    }
  );
}
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
const quotes = await Quote.find(query).populate("id_visitor").populate("checklist_id").populate("company_id").populate("school_id")

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
        status: "Allocated",
      },
    }
  );
};

const assignAffiliate = async (id, affiliate, pushedDate, pushed_price) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        white_list: affiliate,
        pushedDate: pushedDate,
        pushed_price : pushed_price,
        status: "Pushed",
        handled_by: 1,
      },
    }
  );
};

const surveyAffiliate = async (id, affiliate) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        white_list: affiliate,
      },
    }
  );
};

const acceptAssignedAffiliate = async (id, id_affiliate) => {
  const updateQuote = await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        white_list: null,
        id_affiliate: id_affiliate
      },
    }
  );
  return updateQuote
};

// add driver to affiliate's quotes
const addAffiliateDriverToQuoteDao = async (id, affiliateDriver_ID) => {
  console.log("DAO", id, affiliateDriver_ID);
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        id_affiliate_driver: affiliateDriver_ID,
        status: "Driver Allocated",
      },
    }
  );
};

// add vehicle to affiliate's quotes
const addAffiliateVehicleToQuote = async (id, affiliateVehicle_ID) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        id_affiliate_vehicle: affiliateVehicle_ID,
        status: "Allocated",
      },
    }
  );
};

// add driver and vehicle to affiliate's quotes
const assignAffiliateDriverAndVehicleToQuoteDao = async (
  id,
  affiliateVehicle_ID,
  affiliateDriver_ID
) => {
  return await Quote.findByIdAndUpdate(id, {
    $set: {
      id_affiliate_vehicle: affiliateVehicle_ID,
      id_affiliate_driver: affiliateDriver_ID,
      status: "Allocated",
    },
  });
};

// get the affiliate's quotes by the affiliate's Id
async function getQuotesByIdAffiliate(id) {
  try {
    console.log(id);
    return await Quote.find({ id });
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw error;
  }
}

//update Status Affiliate Quote To Cancel
const updateStatusAffiliateQuoteToCancel = async (id, status) => {
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

// update affiliate driver
const updateAfiliateDriver = async (id, diver) => {
  const quote = await Quote.findById(id);
  if (quote.id_affiliate_vehicle === null) {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_driver: diver,
          status: "Driver Allocated",
        },
      }
    );
  } else {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_affiliate_vehicle: diver,
          status: "Allocated",
        },
      }
    );
  }
};

// update progress
const updateAffiliateProgress = async (id, progress) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        progress: progress,
      },
    }
  );
};

// update affiliate vehicle
const updateAffiliateVehicle = async (id, vehicle) => {
  const quote = await Quote.findById(id);
  if (quote.id_affiliate_vehicle === null) {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_affiliate_vehicle: vehicle,
          status: "Vehicle Allocated",
        },
      }
    );
  } else {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_affiliate_vehicle: vehicle,
          status: "Allocated",
        },
      }
    );
  }
};

//delete affiliate quote
const deleteAffiliateQuote = async (id) => {
  return await Quote.findByIdAndDelete(id);
};

const updateStatusAffiliateQuoteToRefuse = async (id, status, affiliateId) => {
  try {
    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      {
        $set: {
          status: status,
          progress: "Refused",
          priceJob: "",
          noteAcceptJob: "",
          statusJob: `Affiliate ${affiliateId} refuses the quote`,
        },
      },
      { new: true }
    );
    return updatedQuote;
  } catch (error) {
    throw new Error(
      "Failed to update quote status to refuse: " + error.message
    );
  }
};

const updateStatusAffiliateQuoteToAccept = async (
  id,
  status,
  priceJob,
  noteAcceptJob
) => {
  try {
    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      {
        $set: {
          status: status,
          progress: "Accepted",
          priceJob: priceJob, // Update priceJob attribute
          noteAcceptJob: noteAcceptJob,
        },
      },
      { new: true }
    );
    return updatedQuote;
  } catch (error) {
    throw new Error(
      "Failed to update quote status to accept: " + error.message
    );
  }
};

//send Price and Notes
const sendPriceAndNotes = async (
  idAffiliate,
  price,
  noteAcceptJob,
) => {
  try {
    const updatedAffiliate = await Affiliate.findByIdAndUpdate(
      { _id: idAffiliate },
      {
        $set: {
          price: price,
          noteAcceptJob: noteAcceptJob,
        },
      },
      { new: true }
    );
    return updatedAffiliate;
  } catch (error) {
    throw new Error(
      "Failed to update affiliate: " + error.message
    );
  }
};

//send Accept Job Status
const sendJobStatus = async (
  idAffiliate,
  jobStatus,
  idQuote
) => {
  try {
    const updatedAffiliate = await Affiliate.findByIdAndUpdate(
      { _id: idAffiliate },
      {
        $set: {
          jobStatus: jobStatus,
        },
      },
      { new: true }
    );
    const updatedQuote = await Quote.findByIdAndUpdate(
      { _id: idQuote },
      {
        $set: {
          progress: "Accepted",
        },
      },
      { new: true }
    );
    return updatedAffiliate;
  } catch (error) {
    throw new Error(
      "Failed to update affiliate: " + error.message
    );
  }
};

//send Refuse Job Status
const sendRefuseJobStatus = async (
  id_Affiliate,
  job_Status,
  id_quote
) => {
  try {
    console.log(id_quote)
    const updatedAffiliate = await Affiliate.findByIdAndUpdate(
      { _id: id_Affiliate },
      {
        $set: {
          jobStatus: job_Status,
        },
      },
      { new: true }
    );
    const updatedQuote = await Quote.findByIdAndUpdate(
      { _id: id_quote },
      {
        $set: {
          status: "Booked",
          id_affiliate: null
        },
      },
      { new: true }
    );
    return updatedAffiliate;
  } catch (error) {
    throw new Error(
      "Failed to update affiliate: " + error.message
    );
  }
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
  assignDriverAndVehicleToQuoteDao,
  assignAffiliate,
  surveyAffiliate,
  acceptAssignedAffiliate,
  updateStatusAffiliateQuoteToAccept,
  updateStatusAffiliateQuoteToRefuse,
  updateAffiliateVehicle,
  updateAffiliateProgress,
  updateAfiliateDriver,
  updateStatusAffiliateQuoteToCancel,
  getQuotesByIdAffiliate,
  assignAffiliateDriverAndVehicleToQuoteDao,
  addAffiliateVehicleToQuote,
  addAffiliateDriverToQuoteDao,
  sendPriceAndNotes,
  sendJobStatus,
  sendRefuseJobStatus
};
