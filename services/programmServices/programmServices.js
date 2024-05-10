const programmDao = require("../../dao/programmDao/programmDao");
const groupEmployeeDao = require("../../dao/groupEmployeeDao/groupEmployeeDao");
const groupStudentDao = require("../../dao/groupStudentDao/groupStudentDao");

const createProgramm = async (programmData, groupsData) => {

  let program = await programmDao.createProgramm(programmData);
  let groups = [];

  let updatedProgram;

  if(groupsData.type === "School"){
    for(let group of groupsData.groupCollection){
      group.program = program._id;
     let createdGroup = await groupStudentDao.addNewGroup(group);
    
     groups.push(createdGroup._id);
    }
    
    updatedProgram = await programmDao.updateSchoolGroups(program._id, groups);
  
    return updatedProgram
  }

  if(groupsData.type === "Company"){
    for(let group of groupsData.groupCollection){
      group.program = program._id;
      let createdGroup = await groupEmployeeDao.addNewGroup(group);
      groups.push(createdGroup._id);
     }
     updatedProgram = await programmDao.updateCompanyGroups(program._id, groups);
     return updatedProgram
  }


};

const getProgramms = async () => {
  return await programmDao.getProgramms();
};

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
  let within_payment_days = respondData.within_payment_days;
  console.log("From Services",respondData)
  await programmDao.updateStatus(
    program_id,
    notes_for_client,
    unit_price,
    total_price,
    program_status,
    invoiceFrequency,
    within_payment_days
  );
  return "Response Send!!";
};

const convertToContract = async (programData) => {
  await programmDao.convert_to_contract(programData);
};

const convertToQuote = async (programData) => {
  let id_schedule = programData.id_schedule;
  await programmDao.updateToQuote(id_schedule, programData);
  return "Converted To Quote!!";
};

const updateStatusToConverted = async (programData) => {
  let id = programData.id;
  let status = programData.status;
  await programmDao.updateStatusToConverted(id, status);
  return "Converted!!";
};

module.exports = {
  createProgramm,
  getProgramms,
  getProgrammById,
  sendRespond,
  convertToContract,
  convertToQuote,
  deleteProgramm,
  updateStatusToConverted
};
