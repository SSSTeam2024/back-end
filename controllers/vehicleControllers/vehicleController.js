const vehicleService = require('../../services/vehicleServices/vehicleService');
const globalFunctions = require('../../utils/globalFunctions');

const addNewVehicle = async (req, res) => {
  try {
    const { 
      registration_number,
      model,
      color,
      type,
      max_passengers,
      fleet_number,
      engine_number,
      mileage,
      registration_date,
      depot_name,
      purchase_date,
      purchase_price,
      sale_date,
      statusVehicle,
      manufacturer,
      engine_size,
      fuel_type,
      speed_limit,
      insurance_type,
      insurance_policy_number,
      ownership,
      owner_name,
      note,
      extra,
      mot_expiry,
      mot_file_base64_string, // File
      mot_file_extension, // File
      vehicle_images_base64_string, // File
      vehicle_images_extension, // File
      tax_expiry,
      tax_file_base64_string, // File
      tax_file_extension, // File
      insurance_expiry,
      insurance_file_base64_string, // File
      insurance_file_extension, // File
      inspection_due,
      service_due,
      tacho_calibration_due,
      coif_certificate_number,
      coif_certificate_date,
      hp_start_date,
      hp_end_date,
      hp_reference_no,
      monthly_repayment_amount,
      hp_company,
    } = req.body;
    console.log(req.body);
    
    const motFilesPath = 'files/VehicleFiles/motFiles/';
    const taxFilesPath = 'files/VehicleFiles/taxFiles/';
    const insuranceFilesPath = 'files/VehicleFiles/insuranceFiles/';
    const vehicleImagesPath = 'files/VehicleFiles/vehicleImages/';

    let mot_file = globalFunctions.generateUniqueFilename(mot_file_extension,'VehicleMot');
    let tax_file = globalFunctions.generateUniqueFilename(tax_file_extension,'VehicleTax');
    let insurance_file = globalFunctions.generateUniqueFilename(insurance_file_extension,'VehicleInsurance');
    let vehicle_images = globalFunctions.generateUniqueFilename(vehicle_images_extension,'VehicleImages');

    let documents = [
      {
        base64String: vehicle_images_base64_string,
        extension: vehicle_images_extension,
        name: vehicle_images,
        path: vehicleImagesPath
      },
      {
        base64String: mot_file_base64_string,
        extension: mot_file_extension,
        name: mot_file,
        path: motFilesPath
      },
      {
        base64String: tax_file_base64_string,
        extension: tax_file_extension,
        name: tax_file,
        path: taxFilesPath
      },
      {
        base64String: insurance_file_base64_string,
        extension: insurance_file_extension,
        name: insurance_file,
        path: insuranceFilesPath
      }
    ];
    
    const vehicle = await vehicleService.createVehicle({ 
      registration_number,
      model,
      color,
      type,
      max_passengers,
      fleet_number,
      engine_number,
      mileage,
      registration_date,
      depot_name,
      purchase_date,
      purchase_price,
      sale_date,
      statusVehicle,
      manufacturer,
      engine_size,
      fuel_type,
      speed_limit,
      insurance_type,
      insurance_policy_number,
      ownership,
      owner_name,
      note,
      extra,
      mot_expiry,
      mot_file, // File
      tax_expiry,
      tax_file, // File
      insurance_expiry,
      insurance_file, // File
      inspection_due,
      service_due,
      tacho_calibration_due,
      coif_certificate_number,
      coif_certificate_date,
      hp_start_date,
      hp_end_date,
      hp_reference_no,
      monthly_repayment_amount,
      hp_company,
      vehicle_images
     },documents);
    res.json(vehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const updateVehicleById = async (req, res) => {
  try {
    const vehicleId = req.params.id;
    const { 
      registration_number,
      model,
      color,
      type,
      max_passengers,
      fleet_number,
      engine_number,
      mileage,
      registration_date,
      depot_name,
      purchase_date,
      purchase_price,
      sale_date,
      statusVehicle,
      manufacturer,
      engine_size,
      fuel_type,
      speed_limit,
      insurance_type,
      insurance_policy_number,
      ownership,
      owner_name,
      note,
      extra,
      vehicle_images,
      mot_expiry,
      tax_expiry,
      insurance_expiry,
      inspection_due,
      service_due,
      tacho_calibration_due,
      coif_certificate_number,
      coif_certificate_date,
      hp_start_date,
      hp_end_date,
      hp_reference_no,
      monthly_repayment_amount,
      hp_company,
     } = req.body;

    const updatedVehicle = await vehicleService.updateVehicle(vehicleId, { 
      registration_number,
      model,
      color,
      type,
      max_passengers,
      fleet_number,
      engine_number,
      mileage,
      registration_date,
      depot_name,
      purchase_date,
      purchase_price,
      sale_date,
      statusVehicle,
      manufacturer,
      engine_size,
      fuel_type,
      speed_limit,
      insurance_type,
      insurance_policy_number,
      ownership,
      owner_name,
      note,
      extra,
      vehicle_images,
      mot_expiry,
      tax_expiry,
      insurance_expiry,
      inspection_due,
      service_due,
      tacho_calibration_due,
      coif_certificate_number,
      coif_certificate_date,
      hp_start_date,
      hp_end_date,
      hp_reference_no,
      monthly_repayment_amount,
      hp_company,
     });

    if (!updatedVehicle) {
      return res.status(404).send('Vehicle not found!');
    }
    res.json(updatedVehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const getVehicleById = async (req, res) => {
  try {
    const vehicleId = req.params.id;

    const getVehicle = await vehicleService.getVehicleById(vehicleId);

    if (!getVehicle) {
      return res.status(404).send('Vehicle not found');
    }
    res.json(getVehicle);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleService.getVehicles();
    res.json( vehicles );
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

const deleteVehicleById = async (req, res) => {
  try {
    const vehicleId = req.params.id;

    const deletedVehicle = await vehicleService.deleteVehicle(vehicleId);

    if (!deletedVehicle) {
      return res.status(404).send('Vehicle not found');
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  addNewVehicle,
  updateVehicleById,
  getVehicleById,
  getAllVehicles,
  deleteVehicleById
};
