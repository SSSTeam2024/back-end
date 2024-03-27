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

// const deleteQuote = async (id) => {
//   return await quoteDao.deleteQuote(id);
// };
const getProgrammById = async (id) => {
  return await programmDao.getProgrammById(id);
};

const sendRespond = async (respondData) => {
  let program_id = respondData.id;
  let program_status = respondData.program_status;
  let unit_price = respondData.unit_price;
  let total_price = respondData.total_price;
  let notes_for_client = respondData.notes_for_client;
  await programmDao.updateStatus(
    program_id,
    notes_for_client,
    unit_price,
    total_price,
    program_status
  );
  return "Response Send!!";
};

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
  sendRespond,
};
