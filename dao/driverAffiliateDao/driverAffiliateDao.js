const DriverAffiliate = require("../../models/driverAffiliateModels/driverAffiliateModels");

const createDriverAffiliate = async (driver) => {
  return await DriverAffiliate.create(driver);
};

const getAffiliateDrivers = async (id) => {
  const query = {
    affilaite_reference_id: id,
  };

  return await DriverAffiliate.find(query);
};

const updateAffiliateDriver = async (id, updateData) => {
  return await DriverAffiliate.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteAffiliateDriver = async (id) => {
  return await DriverAffiliate.findByIdAndDelete(id);
};

const getAffiliateDriverById = async (id) => {
  return await DriverAffiliate.findById(id);
};

const getAffiliateDriverByEmail = async (email) => {
  return await DriverAffiliate.findOne({ email });
};

module.exports = {
  getAffiliateDriverByEmail,
  getAffiliateDriverById,
  deleteAffiliateDriver,
  updateAffiliateDriver,
  getAffiliateDrivers,
  createDriverAffiliate,
};
