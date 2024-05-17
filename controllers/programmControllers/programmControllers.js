const programmService = require("../../services/programmServices/programmServices");

const getProgramms = async (req, res) => {
  try {
    const programms = await programmService.getProgramms();
    res.json(programms);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const createProgramm = async (req, res) => {
  try {
    const {
      notes,
      extra,
      recommanded_capacity,
      exceptDays,
      freeDays_date,
      droppOff_date,
      pickUp_date,
      destination_point,
      stops,
      origin_point,
      programName,
      dropOff_time,
      pickUp_Time,
      workDates,
      notes_for_client,
      notes_for_admin,
      unit_price,
      total_price,
      program_status,
      vehiculeType,
      luggage,
      journeyType,
      note,
      school_id
    } = req.body;
    const newProgramm = await programmService.createProgramm({
      notes,
      extra,
      recommanded_capacity,
      exceptDays,
      freeDays_date,
      droppOff_date,
      pickUp_date,
      destination_point,
      stops,
      origin_point,
      programName,
      dropOff_time,
      pickUp_Time,
      workDates,
      notes_for_client,
      notes_for_admin,
      unit_price,
      total_price,
      program_status,
      vehiculeType,
      luggage,
      journeyType,
      note,
      school_id
    });
    res.status(201).json(newProgramm);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//delete program
const deleteProgram = async (req, res) => {
  try {
    const programId = req.params.id;

    const deletedProgram = await programmService.deleteProgram(programId);

    if (!deletedProgram) {
      return res.status(404).send("Program not found");
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
const sendResponseAPI = async (req, res) => {
  try {
    const { id, notes_for_client, unit_price, total_price, program_status } =
      req.body;
    const sentResult = await programmService.sendRespond({
      id,
      notes_for_client,
      unit_price,
      total_price,
      program_status,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const sendResponseNoteAPI = async (req, res) => {
  try {
    const { id, notes_for_admin, unit_price, total_price, program_status } =
      req.body;
    const sentResult = await programmService.sendAdminRespond({
      id,
      notes_for_admin,
      unit_price,
      total_price,
      program_status,
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

// get ProgramStudentGroups By programId

const getProgramStudentGroups = async (req, res) => {
  try {
    const id = req.params.id;
    const groups = await programmService.getProgramStudentGroups(id);
    res.json(groups);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

//get tAssignedStops


module.exports = {
  getProgramms,
  createProgramm,
  deleteProgram,
  sendResponseAPI,
  sendResponseNoteAPI,
  getProgramStudentGroups
};
