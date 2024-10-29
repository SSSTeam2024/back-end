const Programm = require("../../models/programmModel/programm");
const Contract = require("../../models/contractModel/contract");
const Quote = require("../../models/quoteModel/quote");

const createProgramm = async (programmData) => {
  return await Programm.create(programmData);
};

const getProgramms = async () => {
  return await Programm.find()
    .populate("company_id")
    .populate("school_id")
    .populate({
      path: "students_groups",
      populate: {
        path: "students",
      },
    })
    .populate({
      path: "employees_groups",
      populate: {
        path: "employees",
      },
    });
};

const getProgramStudentGroups = async (id) => {
  let program = await Programm.findOne({ _id: id }).populate({
    path: "students_groups",
    populate: {
      path: "students",
    },
    populate: {
      path: "vehicle_type",
    },
  });
  return program.students_groups;
};

const getProgramEmployeeGroups = async (id) => {
  let program = await Programm.findOne({ _id: id }).populate({
    path: "employees_groups",
    populate: {
      path: "employees",
    },
  });
  return program.employees_groups;
};

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
  invoiceFrequency,
  within_payment_days
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
        status: status,
      },
    }
  );
};

const updateProgramm = async (id, updatedData) => {
  return await Programm.findByIdAndUpdate(id, updatedData, { new: true });
};

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
  updateStatus,
  convert_to_contract,
  updateToQuote,
  deleteProgramm,
  updateStatusToConverted,
  updateCompanyGroups,
  updateSchoolGroups,
  getProgramStudentGroups,
  getProgramEmployeeGroups,
  updateProgramm,
};
