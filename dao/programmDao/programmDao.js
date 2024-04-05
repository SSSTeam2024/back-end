const Programm = require("../../models/programmModel/programm");
const Contract = require("../../models/contractModel/contract");
const Quote = require("../../models/quoteModel/quote");

const createProgramm = async (programmData) => {
  return await Programm.create(programmData);
};

const getProgramms = async () => {
  return await Programm.find();
};

// const updateQuote = async (id, updateData) => {
//   return await Quote.findByIdAndUpdate(id, updateData, { new: true });
// };

const deleteProgramm = async (id) => {
  return await Programm.findByIdAndDelete(id);
};

const getProgrammById = async (id) => {
  return await Programm.findById(id);
};

const updateStatus = async (
  id,
  notes_for_client,
  unit_price,
  total_price,
  program_status,
  invoiceFrequency
) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        notes_for_client: notes_for_client,
        unit_price: unit_price,
        total_price: total_price,
        program_status: program_status,
        invoiceFrequency: invoiceFrequency
      },
    }
  );
};

const convert_to_contract = async (programData) => {
  return await Contract.create(programData);
};

const updateToQuote = async (id_schedule, programData) => {
  return await Quote.create(programData);
};

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
  updateStatus,
  convert_to_contract,
  updateToQuote,
  deleteProgramm
};
