const contractService = require("../../services/contrractServices/contractServices");

const createContract = async (req, res) => {
  try {
    const {
      contractName,
      invoiceFrequency,
      customerNotes,
      staffNotes,
      prices,
      unit_price,
      salesperson,
      idProgram,
      idAccount,
      vehicleType,
      journeyType,
      luggageDetails,
      contractStatus,
      accountPhone,
      accountEmail,
      accountName,
      accountRef,
      paymentMethod,
      effectiveDate,
      within_payment_days,
      contract_number,
      subTotal,
      tva
    } = req.body;
    const newContract = await contractService.createContract({
      contractName,
      invoiceFrequency,
      customerNotes,
      staffNotes,
      prices,
      unit_price,
      salesperson,
      idProgram,
      idAccount,
      vehicleType,
      journeyType,
      luggageDetails,
      contractStatus,
      accountPhone,
      accountEmail,
      accountName,
      accountRef,
      paymentMethod,
      effectiveDate,
      within_payment_days,
      contract_number,
      subTotal,
      tva
    });
    console.log(newContract);
    res.status(201).json(newContract);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateContract = async (req, res) => {
  try {
    const contractId = req.params.id;
    const {
      contractName,
      invoiceFrequency,
      customerNotes,
      staffNotes,
      prices,
      salesperson,
      idProgram,
      idAccount,
      vehicleType,
      journeyType,
      luggageDetails,
      contractStatus,
      accountPhone,
      accountEmail,
      accountName,
      accountRef,
    } = req.body;

    const updatedContract = await contractService.updateContract(contractId, {
      contractName,
      invoiceFrequency,
      customerNotes,
      staffNotes,
      prices,
      salesperson,
      idProgram,
      idAccount,
      vehicleType,
      journeyType,
      luggageDetails,
      contractStatus,
      accountPhone,
      accountEmail,
      accountName,
      accountRef,
    });

    if (!updatedContract) {
      return res.status(404).send("Contract not found");
    }
    res.json(updatedContract);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteContract = async (req, res) => {
  try {
    const contractId = req.params.id;

    const deletedContract = await contractService.deleteContract(contractId);

    if (!deletedContract) {
      return res.status(404).send("Contract not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const getContracts = async (req, res) => {
  try {
    const contracts = await contractService.getContracts();
    res.json(contracts);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getContractById = async (req, res) => {
  try {
    const contractId = req.params.id;

    const getContract = await contractService.getContractById(contractId);

    if (!getContract) {
      return res.status(404).send("Contract not found");
    }
    res.json(getContract);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateContractStatusToApprovedAPI = async (req, res) => {
  try {
    const { contract_id, effectiveDate } = req.body;
    const sentResult = await contractService.updateContractStatusToApproved({
      contract_id,
      effectiveDate,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  getContractById,
  getContracts,
  deleteContract,
  updateContract,
  createContract,
  updateContractStatusToApprovedAPI
};
