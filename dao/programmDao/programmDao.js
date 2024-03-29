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

const updateStatus = async (
  id,
  notes_for_client,
  unit_price,
  total_price,
  program_status
) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        notes_for_client: notes_for_client,
        unit_price: unit_price,
        total_price: total_price,
        program_status: program_status,
      },
    }
  );
};

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
  updateStatus,
};
