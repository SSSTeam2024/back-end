const Quote = require("../../models/quoteModel/quote");

const createQuote = async (quoteData) => {
  return await Quote.create(quoteData);
};

const getQuotes = async () => {
  return await Quote.find()
  .populate("id_affiliate_driver")
  .populate("id_affiliate_vehicle")
  .populate("affiliate_id")
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
  return await Quote.findById(id).populate("id_affiliate_driver")
  .populate("id_affiliate_vehicle")
  .populate("affiliate_id")
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


// add driver to affiliate's quotes
const addAffiliateDriverToQuoteDao=async(id,affiliateDriver_ID)=>{
  console.log("DAO", id, affiliateDriver_ID)
return await Quote.findByIdAndUpdate({_id:id},{
  $set: {
    id_affiliate_driver: affiliateDriver_ID,
    status: "Driver Allocated",
  },
})
}
// add vehicle to affiliate's quotes
const addAffiliateVehicleToQuote= async(id,affiliateVehicle_ID)=>{
  return await Quote.findByIdAndUpdate({_id:id},{
    $set: {
      id_affiliate_vehicle: affiliateVehicle_ID,
      status: "Allocated",
    },
  })
  }
  // add driver and vehicle to affiliate's quotes
  const assignAffiliateDriverAndVehicleToQuoteDao = async (id, affiliateVehicle_ID, affiliateDriver_ID) => {
    console.log("id",id)
    console.log("affiliateVehicle_ID",affiliateVehicle_ID)
    console.log("affiliateDriver_ID",affiliateDriver_ID)
    return await Quote.findByIdAndUpdate(
      id,
      {
        $set: {
          id_affiliate_vehicle: affiliateVehicle_ID,
          id_affiliate_driver: affiliateDriver_ID,
          status: "Allocated",
        },
      }
      
    );

  };
  

  // get the affiliate's quotes by the affiliate's Id 
  async function getQuotesByIdAffiliate(id) {
    try {
      console.log(id)
      return await Quote.find({id});
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
    const quote = await Quote.findById(id)
    if(quote.id_affiliate_vehicle === null) {
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
          progress: progress
        },
      }
    );
  };
// update affiliate vehicle
  const updateAffiliateVehicle = async (id, vehicle) => {
    const quote = await Quote.findById(id)
    if(quote.id_affiliate_vehicle === null) {
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          id_affiliate_vehicle: vehicle,
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

  const updateStatusAffiliateQuoteToRefuse = async (id, status) => {
    console.log(id)
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          status: status,
          progress: "Refused",
        },
      }
    );
  };

  const updateStatusAffiliateQuoteToAccept = async (id, status) => {
    console.log(id)
    return await Quote.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          status: status,
          progress: "Accept",
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
  assignDriverAndVehicleToQuoteDao,
  getQuotesByIdAffiliate,
  assignAffiliateDriverAndVehicleToQuoteDao,
  addAffiliateVehicleToQuote,
  addAffiliateDriverToQuoteDao,
  updateStatusAffiliateQuoteToCancel,
  updateAfiliateDriver,
  updateAffiliateVehicle,
  updateAffiliateProgress,
  deleteAffiliateQuote,
  updateStatusAffiliateQuoteToAccept,
  updateStatusAffiliateQuoteToRefuse


};