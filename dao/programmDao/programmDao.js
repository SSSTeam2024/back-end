const Programm = require('../../models/programmModel/programm');

const createProgramm = async (programmData) => {
  return await Programm.create(programmData);
};

const getProgramms = async () => {
  return await Programm.find().populate("company_id")
  .populate("school_id").populate("school_id").populate({
    path: "students_groups",
    populate: {
      path: "students",
    }
  })/* .populate("employees_groups") */;
};

const getProgramStudentGroups = async (id) => {
  let program = await Programm.findOne({ _id: id }).populate({
    path: "students_groups",
    populate: {
      path: "students",
    }});
  return program.students_groups;
};

// const updateQuote = async (id, updateData) => {
//   return await Quote.findByIdAndUpdate(id, updateData, { new: true });
// };

// delete Program 

const deleteProgram = async (id) => {
  return await Programm.findByIdAndDelete(id);
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

const updateNotesAdmin = async (
  id,
  notes_for_admin,
  unit_price,
  total_price,
  program_status
) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        notes_for_admin: notes_for_admin,
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
deleteProgram,
updateStatus,
updateNotesAdmin,
getProgramStudentGroups
};
