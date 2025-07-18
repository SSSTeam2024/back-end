const Quote = require("../../models/quoteModel/quote");
const Affiliate = require("../../models/affiliateModels/affiliate");
const groupEmployee = require("../../models/groupEmployee/groupEmployeeSchema");
const groupStudent = require("../../models/groupStudent/groupStudent");

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
        path: "id",
      },
    })
    .populate("id_group_employee")
    .populate("id_group_student")
    .populate({
      path: "information",
      populate: {
        path: "by",
      },
    });
};

const updateQuote = async (id, updateData) => {
  return await Quote.findByIdAndUpdate(id, updateData, { new: true });
};

const getQuoteById = async (id) => {
  return await Quote.findById(id)
    .populate("id_affiliate_driver")
    .populate("id_affiliate_vehicle")
    .populate({
      path: "white_list",
      populate: {
        path: "vehicles",
      },
    })
    .populate("id_affiliate")
    .populate("id_driver")
    .populate("id_visitor")
    .populate("school_id")
    .populate("company_id")
    .populate({
      path: "id_group_employee",
      populate: {
        path: "employees",
      },
    })
    .populate({
      path: "id_group_student",
      populate: {
        path: "students",
      },
    });
};

const deleteQuote = async (id) => {
  return await Quote.findByIdAndDelete(id);
};

const updateQuoteStatus = async (id, paymentType, paymentMode) => {
  let bookedStatus = "Booked";
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        status: bookedStatus,
        progress: "Booked",
        payment_type: paymentType,
        payment_method: paymentMode,
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
  const quote = await Quote.findById(id);
  if (quote.id_vehicle === null) {
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
        progress: progress,
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
  const quote = await Quote.findById(id);
  if (quote.id_driver === null) {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_vehicle: vehicle,
          status: "Vehicle Allocated",
        },
      }
    );
  } else {
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
  const littleThanMonth = String(Number(month) + 1).padStart(2, "0");
  const query = {
    date: { $gt: `${year}-${month}-00`, $lt: `${year}-${littleThanMonth}-00` },
    id_driver: id,
  };

  // Execute the query
  const quotes = await Quote.find(query)
    .populate("id_visitor")
    .populate("checklist_id")
    .populate("company_id")
    .populate("school_id")
    .populate("id_driver")
    .populate("id_vehicle");

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
  const id_schedule = id;
  return await Quote.find({ id_schedule });
};

const assignDriverAndVehicleToQuoteDao = async (id, driver_ID, vehicle_ID) => {
  const updateFields = {
    status: "Allocated",
  };

  if (driver_ID !== null) {
    updateFields.id_driver = driver_ID;
  }

  if (vehicle_ID !== null) {
    updateFields.id_vehicle = vehicle_ID;
  }

  return await Quote.findByIdAndUpdate(
    { _id: id },
    { $set: updateFields },
    { new: true }
  );
};

const assignAffiliate = async (id, affiliate, pushedDate, pushed_price) => {
  return await Quote.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        white_list: affiliate,
        pushedDate: pushedDate,
        pushed_price: pushed_price,
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
        id_affiliate: id_affiliate,
      },
    }
  );
  return updateQuote;
};

// add driver to affiliate's quotes
const addAffiliateDriverToQuoteDao = async (id, affiliateDriver_ID) => {
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
const sendPriceAndNotes = async (idQuote, white_list) => {
  try {
    const updatedAQuote = await Quote.findByIdAndUpdate(
      { _id: idQuote },
      {
        $set: {
          white_list: white_list,
        },
      },
      { new: true }
    );
    return updatedAQuote;
  } catch (error) {
    throw new Error("Failed to update quote: " + error.message);
  }
};

//DAO for Add Affiliate To Existing White List
const addAffiliateToExistingWhiteList = async (id_Quote, white_list) => {
  try {
    const updatedAQuote = await Quote.findByIdAndUpdate(
      { _id: id_Quote },
      {
        $set: {
          white_list: white_list,
        },
      },
      { new: true }
    );
    return updatedAQuote;
  } catch (error) {
    throw new Error("Failed to update quote: " + error.message);
  }
};

//DAO for Delete Affiliate To Existing White List
const deleteAffiliateToExistingWhiteList = async (QuoteID, whiteListe) => {
  try {
    const updatedAQuote = await Quote.findByIdAndUpdate(
      { _id: QuoteID },
      {
        $set: {
          white_list: whiteListe,
        },
      },
      { new: true }
    );
    return updatedAQuote;
  } catch (error) {
    throw new Error("Failed to update quote: " + error.message);
  }
};

//DAO for Delete White List
const deleteWhiteList = async (Quote_ID) => {
  try {
    const updatedAQuote = await Quote.findByIdAndUpdate(
      { _id: Quote_ID },
      {
        $set: {
          white_list: null,
          status: "Booked",
          handled_by: "0",
          pushedDate: "",
          pushed_price: "",
        },
      },
      { new: true }
    );
    return updatedAQuote;
  } catch (error) {
    throw new Error("Failed to update quote: " + error.message);
  }
};

//send Accept Job Status
const sendJobStatus = async (idAffiliate, jobStatus, idQuote) => {
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
    throw new Error("Failed to update affiliate: " + error.message);
  }
};

//send Refuse Job Status
const sendRefuseJobStatus = async (id_Affiliate, job_Status, id_quote) => {
  try {
    console.log(id_quote);
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
          id_affiliate: null,
        },
      },
      { new: true }
    );
    return updatedAffiliate;
  } catch (error) {
    throw new Error("Failed to update affiliate: " + error.message);
  }
};

const getNewQuotesByDriverID = async (id) => {
  const query = {
    progress: {
      $in: [
        "Driver Allocated",
        "New",
        "Booked",
        "Vehicle Allocated",
        "Allocated",
      ],
    },
    id_driver: id,
  };

  // Execute the query
  const quotes = await Quote.find(query)
    .populate("id_visitor")
    .populate("checklist_id")
    .populate("company_id")
    .populate("school_id");

  return quotes;
};

const getAcceptedQuotesByDriverID = async (id) => {
  const query = {
    progress: {
      $in: ["Accepted"],
    },
    id_driver: id,
  };

  // Execute the query
  const quotes = await Quote.find(query)
    .populate("id_visitor")
    .populate("checklist_id")
    .populate("company_id")
    .populate("school_id");

  return quotes;
};

const getRefusedQuotesByDriverID = async (id) => {
  const query = {
    progress: {
      $in: ["Refused"],
    },
    id_driver: id,
  };

  // Execute the query
  const quotes = await Quote.find(query)
    .populate("id_visitor")
    .populate("checklist_id")
    .populate("company_id")
    .populate("school_id");

  return quotes;
};

const getCompletedQuotesByDriverID = async (id) => {
  const query = {
    progress: {
      $in: ["Completed"],
    },
    id_driver: id,
  };

  // Execute the query
  const quotes = await Quote.find(query)
    .populate("id_visitor")
    .populate("checklist_id")
    .populate("company_id")
    .populate("school_id");

  return quotes;
};

const getLatestQuote = async () => {
  return await Quote.findOne({}, {}, { sort: { _id: -1 } });
};

const getAllQuotesBySchoolID = async (id) => {
  const query = {
    school_id: id,
  };

  return await Quote.find(query)
    .populate("id_visitor")
    .populate("id_vehicle")
    .populate("id_driver")
    .populate("company_id")
    .populate("school_id");
};

const getAllQuotesByCompanyID = async (id) => {
  const query = {
    company_id: id,
  };

  return await Quote.find(query)
    .populate("id_visitor")
    .populate("id_vehicle")
    .populate("id_driver")
    .populate("company_id")
    .populate("school_id");
};

const getAllSuggestedQuotesByAffiliateID = async (id) => {
  return await Quote.find({ "white_list.id": id })
    .populate("id_visitor")
    .populate("school_id")
    .populate("company_id");
  //.populate("white_list.id");
};

const getAllQuotesByVisitorEmail = async (email) => {
  return await Quote.find()
    .populate({
      path: "id_visitor",
      match: { email: email },
    })
    .exec();
};

const getAllQuotesByCompanyEmail = async (email) => {
  return await Quote.find()
    .populate({
      path: "company_id",
      match: { email: email },
    })
    .exec();
};

const getAllQuotesBySchoolEmail = async (email) => {
  return await Quote.find()
    .populate({
      path: "school_id",
      match: { email: email },
    })
    .exec();
};
const getCompletedJobsFromLast7Days = async (driver_id, currentDateStr) => {
  try {
    const currentDate = new Date(currentDateStr);

    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 6);

    const currentDateISO = currentDate.toISOString().split("T")[0];
    const startDateISO = startDate.toISOString().split("T")[0];

    const query = {
      date: {
        $gte: startDateISO,
        $lte: currentDateISO,
      },
      progress: {
        $in: ["Completed"],
      },
      id_driver: driver_id,
    };

    const result = await Quote.find(query)
      .populate("id_visitor")
      .populate("checklist_id")
      .populate("company_id")
      .populate("school_id");

    return result;
  } catch (error) {
    console.error(error);
  }
};

const getAllQuotesByReference = async (id) => {
  const query = {
    quote_ref: id,
  };

  return await Quote.find(query)
    .populate("id_visitor")
    .populate("company_id")
    .populate("school_id")
    .populate("id_driver")
    .populate("id_vehicle");
};

const getQuotesByEmployeeID = async (employeeId, date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const littleThanMonth = String(Number(month) + 1).padStart(2, "0");

  const groupEmployees = await groupEmployee
    .find({
      employees: employeeId,
    })
    .select("_id");

  if (!groupEmployees.length) {
    return [];
  }

  const groupEmployeeIds = groupEmployees.map(
    (groupEmployee) => groupEmployee._id
  );

  const quotes = await Quote.find({
    id_group_employee: { $in: groupEmployeeIds },
    date: { $gt: `${year}-${month}-00`, $lt: `${year}-${littleThanMonth}-00` },
  })
    .populate("id_visitor")
    .populate("checklist_id")
    .populate("company_id")
    .populate("school_id");

  return quotes;
};

const getQuotesByStudentID = async (studentId, date) => {
  const year = date.substring(0, 4);
  const month = date.substring(5, 7);
  const littleThanMonth = String(Number(month) + 1).padStart(2, "0");

  const groupStudents = await groupStudent
    .find({
      students: studentId,
    })
    .select("_id");

  if (!groupStudents.length) {
    return [];
  }

  const groupStudentIds = groupStudents.map((groupStudent) => groupStudent._id);

  const quotes = await Quote.find({
    id_group_student: { $in: groupStudentIds },
    date: { $gt: `${year}-${month}-00`, $lt: `${year}-${littleThanMonth}-00` },
  })
    .populate("id_visitor")
    .populate("checklist_id")
    .populate("company_id")
    .populate("school_id");

  return quotes;
};

const updateQuoteInformation = async (quoteId, information) => {
  return await Quote.findByIdAndUpdate(
    quoteId,
    { $push: { information: information } },
    { new: true }
  );
};

module.exports = {
  getAllQuotesByCompanyID,
  getAllQuotesBySchoolID,
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
  sendRefuseJobStatus,
  addAffiliateToExistingWhiteList,
  deleteAffiliateToExistingWhiteList,
  deleteWhiteList,
  getNewQuotesByDriverID,
  getAcceptedQuotesByDriverID,
  getRefusedQuotesByDriverID,
  getCompletedQuotesByDriverID,
  getLatestQuote,
  getAllSuggestedQuotesByAffiliateID,
  getCompletedJobsFromLast7Days,
  getAllQuotesByReference,
  getAllQuotesByVisitorEmail,
  getAllQuotesByCompanyEmail,
  getAllQuotesBySchoolEmail,
  getQuotesByEmployeeID,
  getQuotesByStudentID,
  updateQuoteInformation,
};
