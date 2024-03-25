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

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
};
