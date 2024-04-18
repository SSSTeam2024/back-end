const contractDao = require("../../dao/contractDao/contractDao");

const createContract = async (contractData) => {
  return await contractDao.createContract(contractData);
};

const updateContract = async (id, updateData) => {
  return await contractDao.updateContract(id, updateData);
};

const deleteContract = async (id) => {
  return await contractDao.deletedContract(id);
};

const getContracts = async () => {
  return await contractDao.getContracts();
};
const getContractById = async (id) => {
  return await contractDao.getContractById(id);
};
const updateContractStatusToApproved = async (contractData) => {
  console.log("Services", contractData)
  let id = contractData.contract_id;
  console.log("Services id", id)
  let effectiveDate = contractData.effectiveDate;
  await contractDao.updateContractStatus(id, effectiveDate);
  return "Contract Status Up to date!!";
};

module.exports = {
  getContractById,
  createContract,
  updateContract,
  deleteContract,
  getContracts,
  updateContractStatusToApproved
};
