const Programm = require("../../models/programmModel/programm");

const createProgramm = async (programmData) => {
  return await Programm.create(programmData);
};

const getProgramms = async () => {
  return await Programm.find();
};

// const updateQuote = async (id, updateData) => {
//   return await Quote.findByIdAndUpdate(id, updateData, { new: true });
// };

// const deleteQuote = async (id) => {
//   return await Quote.findByIdAndDelete(id);
// };

const getProgrammById = async (id) => {
  return await Programm.findById(id);
};

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
};
