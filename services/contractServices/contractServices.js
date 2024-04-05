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

module.exports = {
  getContractById,
  createContract,
  updateContract,
  deleteContract,
  getContracts,
};