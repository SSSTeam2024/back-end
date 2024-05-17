const programmDao = require("../../dao/programmDao/programmDao");

const createProgramm = async (programmData) => {
    return await programmDao.createProgramm(programmData);
};

const getProgramms = async () => {
  return await programmDao.getProgramms();
};

const getProgramStudentGroups = async (id) => {
  return await programmDao.getProgramStudentGroups(id);
};

// const updateQuote = async (id, updateData) => {
//   return await quoteDao.updateQuote(id, updateData);
// };

// delete Program
const deleteProgram = async (id) => {
  return await programmDao.deleteProgram(id);
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
const sendAdminRespond = async (respondData) => {
  let program_id = respondData.id;
  let program_status = respondData.program_status;
  let unit_price = respondData.unit_price;
  let total_price = respondData.total_price;
  let notes_for_admin = respondData.notes_for_admin;
  await programmDao.updateNotesAdmin(
    program_id,
    notes_for_admin,
    unit_price,
    total_price,
    program_status
  );
  return "Response Send!!";
};



module.exports = {
createProgramm,
getProgramms,
deleteProgram,
sendRespond,
sendAdminRespond,
getProgramStudentGroups
};

