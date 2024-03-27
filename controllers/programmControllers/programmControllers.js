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
      clientID,
      notes_for_client,
      unit_price,
      total_price,
      program_status,
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
      clientID,
      notes_for_client,
      unit_price,
      total_price,
      program_status,
    });
    res.status(201).json(newProgramm);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getProgrammById = async (req, res) => {
  try {
    const programmId = req.params.id;
    const getProgramm = await programmService.getProgrammById(programmId);
    if (!getProgramm) {
      return res.status(404).send("Programm not found");
    }
    res.json(getProgramm);
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

module.exports = {
  getProgramms,
  createProgramm,
  getProgrammById,
  sendResponseAPI,
};
