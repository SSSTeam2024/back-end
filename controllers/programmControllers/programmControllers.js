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
      notes_for_admin,
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
      notes_for_admin,
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
    const { id, notes_for_client, unit_price, total_price, program_status, invoiceFrequency } =
      req.body;
      console.log(req.body)
    const sentResult = await programmService.sendRespond({
      id,
      notes_for_client,
      unit_price,
      total_price,
      program_status,
      invoiceFrequency
    });
    res.json({ success: sentResult });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const convertedToContract = async (req, res) => {
  try {
    const { idProgram } = req.body;
    let program = await programmService.getProgrammById(idProgram);
    await programmService.convertToContract({
      idProgram: idProgram,
      contractName: program.programName,
      invoiceFrequency: "",
      customerNotes: "",
      staffNotes: "",
      prices: program.total_price,
      unit_price: program.unit_price,
      salesperson: "445566778899112233003579",
      idAccount: program.clientID,
      vehicleType: "775533996622884411006482",
      journeyType: "199551144778822003366014",
      luggageDetails: "335577115599886622440032",
      contractStatus: "Pending",
      accountPhone: "",
      accountEmail: "",
      accountName: "",
      accountRef: "",
    });
    res.status(201).send("Converted Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const convertToQuoteAPI = async (req, res) => {
  try {
    const { id_schedule } = req.body;
    let program = await programmService.getProgrammById(id_schedule);
    for (let i = 0; i < program.workDates.length; i++) {
      const sentResult = await programmService.convertToQuote({
        id_schedule: id_schedule,
        id_corporate: program.clientID,
        passengers_number: Number(program.recommanded_capacity),
        start_point: program.origin_point,
        mid_stations: program.stops,
        return_time: program.dropOff_time,
        date: program.workDates[i],
        return_date: program.workDates[i],
        destination_point: program.destination_point,
        pickup_time: program.pickUp_Time,
        progress: "Booked",
        status: "Booked",
        category:"Regular",
        manual_cost: program.unit_price,
        id_driver: "112233445566778899002587",
        id_vehicle: "998877665544332211009854",
        id_invoice: "",
        enquiryDate: new Date()
      });
    }
    res.status(201).send("Converted Successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteProgramm = async (req, res) => {
  try {
    const programmId = req.params.id;

    const deletedProgramm = await programmService.deleteProgramm(programmId);

    if (!deletedProgramm) {
      return res.status(404).send("Programm not found");
    }
    res.sendStatus(200);
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
  convertToQuoteAPI,
  convertedToContract,
  deleteProgramm
};
