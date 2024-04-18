const programmService = require("../../services/programmServices/programmServices");
const authShool = require("../../services/schoolServices/authSchool");
const companyService = require("../../services/companyServices/companyService");
const Contract = require("../../models/contractModel/contract");

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
      invoiceFrequency,
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
      company_id,
      school_id,
      notes_for_client,
      notes_for_admin,
      unit_price,
      total_price,
      program_status,
      vehiculeType,
      luggage,
      journeyType,
    } = req.body;
   if(company_id === "") {
    const newProgramm = await programmService.createProgramm({
      notes,
      extra,
      recommanded_capacity,
      invoiceFrequency,
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
      school_id,
      notes_for_client,
      notes_for_admin,
      unit_price,
      total_price,
      program_status,
      vehiculeType,
      luggage,
      journeyType,
    });
    res.status(201).json(newProgramm);
   } else {
    const newProgramm = await programmService.createProgramm({
      notes,
      extra,
      recommanded_capacity,
      invoiceFrequency,
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
      company_id,
      notes_for_client,
      notes_for_admin,
      unit_price,
      total_price,
      program_status,
      vehiculeType,
      luggage,
      journeyType,
    });
    res.status(201).json(newProgramm);
   }
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
    const { id, notes_for_client, unit_price, total_price, program_status, invoiceFrequency, within_payment_days } =
      req.body;
      console.log(req.body)
    const sentResult = await programmService.sendRespond({
      id,
      notes_for_client,
      unit_price,
      total_price,
      program_status,
      invoiceFrequency, 
      within_payment_days
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
    let school = await authShool.getSchoolById(program.school_id)
    let company = await companyService.getCompanyById(program.company_id)
    const currentYear = new Date().getFullYear();
    const latestContract = await Contract.findOne(
      {},
      {},
      { sort: { updatedAt: -1 } }
    );
    let latestNumber = 0;
    if (latestContract && latestContract.contractRef) {
      const match = latestContract.contractRef.match(/C\d{4}\/(\d+)/);
      if (match) {
        latestNumber = parseInt(match[1], 10); 
      }
    }
    const newNumber = latestNumber + 1;
    const paddedNumber = newNumber.toString().padStart(4, "0");
    const contractRef = `C${currentYear}/${paddedNumber}`
    if(program.school_id === null) {
      await programmService.convertToContract({
        idProgram: idProgram,
        contractName: program.programName,
        invoiceFrequency: program.invoiceFrequency,
        customerNotes: program.notes,
        staffNotes: "",
        prices: ((Number(program.total_price)) + ((Number(program.total_price)) * 0.2)).toFixed(2),
        unit_price: program.unit_price,
        salesperson: "445566778899112233003579",
        idCompany: program.company_id,
        vehicleType: program.vehiculeType,
        journeyType: program.journeyType,
        luggageDetails: program.luggage,
        contractStatus: "Pending",
        contractRef: contractRef,
        accountPhone: company.phone,
        accountEmail: company.email,
        accountName: company.name,
        accountRef: company.name,
        effectiveDate: "",
        within_payment_days: program.within_payment_days,
        contract_number: "",
        subTotal: program.total_price,
        tva: (Number(program.total_price) * 0.2).toFixed(2)
      });
      res.status(201).send("Converted Successfully");
    }
    else {
      await programmService.convertToContract({
        idProgram: idProgram,
        contractName: program.programName,
        invoiceFrequency: program.invoiceFrequency,
        customerNotes: program.notes,
        staffNotes: "",
        prices: ((Number(program.total_price)) + ((Number(program.total_price)) * 0.2)).toFixed(2),
        unit_price: program.unit_price,
        salesperson: "445566778899112233003579",
        idSchool: program.school_id,
        vehicleType: program.vehiculeType,
        journeyType: program.journeyType,
        luggageDetails: program.luggage,
        contractStatus: "Pending",
        contractRef: contractRef,
        accountPhone: school.phone,
        accountEmail: school.email,
        accountName: school.name,
        accountRef: school.name,
        effectiveDate: "",
        within_payment_days: program.within_payment_days,
        contract_number: "",
        subTotal: program.total_price,
        tva: (Number(program.total_price) * 0.2).toFixed(2)
      });
      res.status(201).send("Converted Successfully");
    }
    
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

const updateStatusToConvertedAPI = async (req, res) => {
  try {
    const { id, status } = req.body;
    console.log("id", req.body)
    const sentResult = await programmService.updateStatusToConverted({
      id,
      status
    });
    console.log(sentResult)
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
  convertToQuoteAPI,
  convertedToContract,
  deleteProgramm,
  updateStatusToConvertedAPI
};
