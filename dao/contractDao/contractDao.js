const Contract = require("../../models/contractModel/contract");

const createContract = async (ContractData) => {
  return await Contract.create(ContractData);
};
const updateContract = async (id, updateData) => {
  return await Contract.findByIdAndUpdate(id, updateData, { new: true });
};

const deletedContract = async (id) => {
  return await Contract.findByIdAndDelete(id);
};

const getContracts = async () => {
  return await Contract.find()
    .populate("idProgram")
    .populate("vehicleType")
    .populate("journeyType")
    .populate("luggageDetails")
    .populate("salesperson");
};

const getContractById = async (id) => {
  return await Contract.findById(id);
};
module.exports = {
  getContractById,
  createContract,
  updateContract,
  deletedContract,
  getContracts,
};
