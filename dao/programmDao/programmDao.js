const Programm = require("../../models/programmModel/programm");

const createProgramm = async (programmData) => {
  return await Programm.create(programmData);
};

const getProgramms = async () => {
  return await Programm.find()
    .populate("company_id")
    .populate("school_id")
    .populate("school_id")
    .populate({
      path: "students_groups",
      populate: {
        path: "students",
      },
    }) /* .populate("employees_groups") */;
};

const getProgramStudentGroups = async (id) => {
  let program = await Programm.findOne({ _id: id }).populate({
    path: "students_groups",
    populate: {
      path: "students",
    },
  });
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
        invoiceFrequency: invoiceFrequency,
        within_payment_days: within_payment_days,
      },
    }
  );
};
const updateSchoolGroups = async (id, groups) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        students_groups: groups,
      },
    }
  );
};
const getProgrammById = async (id) => {
  return await Programm.findById(id);
};
const updateCompanyGroups = async (id, groups) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        employees_groups: groups,
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
const convert_to_contract = async (programData) => {
  return await Contract.create(programData);
};

const updateToQuote = async (id_schedule, programData) => {
  return await Quote.create(programData);
};

const updateStatusToConverted = async (id, status) => {
  return await Programm.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        status: status
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
  getProgramStudentGroups,
  updateSchoolGroups,
  updateCompanyGroups,
  getProgrammById,
  convert_to_contract,
  updateToQuote,
  updateStatusToConverted,
};
