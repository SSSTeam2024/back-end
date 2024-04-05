const programmDao = require("../../dao/programmDao/programmDao");

const createProgramm = async (programmData) => {
  return await programmDao.createProgramm(programmData);
};

const getProgramms = async () => {
  return await programmDao.getProgramms();
};

// const updateQuote = async (id, updateData) => {
//   return await quoteDao.updateQuote(id, updateData);
// };

const deleteProgramm = async (id) => {
  return await programmDao.deleteProgramm(id);
};
const getProgrammById = async (id) => {
  return await programmDao.getProgrammById(id);
};

const sendRespond = async (respondData) => {
  let program_id = respondData.id;
  let program_status = respondData.program_status;
  let unit_price = respondData.unit_price;
  let total_price = respondData.total_price;
  let notes_for_client = respondData.notes_for_client;
  let invoiceFrequency = respondData.invoiceFrequency;
  await programmDao.updateStatus(
    program_id,
    notes_for_client,
    unit_price,
    total_price,
    program_status,
    invoiceFrequency
  );
  return "Response Send!!";
};

const convertToContract = async (programData) => {
  await programmDao.convert_to_contract(programData);
};

const convertToQuote = async (programData) => {
  console.log("Services 44", programData);
  let id_schedule = programData.id_schedule;
  await programmDao.updateToQuote(id_schedule, programData);
  return "Converted To Quote!!";
};
module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
  sendRespond,
  convertToContract,
  convertToQuote,
  deleteProgramm
};
