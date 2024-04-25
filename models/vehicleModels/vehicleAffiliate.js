const mongoose = require('mongoose');

const vehicleAffiliateSchema = new mongoose.Schema({
  registration_number: String,
  model: String,
  color: String,
  type: String,
  max_passengers: String,
  fleet_number: String,
  engine_number: String,
  mileage: String,
  registration_date: String,
  depot_name: String,
  purchase_date: String,
  purchase_price: String,
  sale_date: String,
  statusVehicle: String,
  manufacturer: String,
  engine_size: String,
  fuel_type: String,
  speed_limit: String,
  insurance_type: String,
  insurance_policy_number: String,
  ownership: String,
  owner_name: String,
  note: String,
  extra: [String],
  vehicle_images_base64_string: String,
  vehicle_images_extension: String,
  vehicle_images: String,
  mot_expiry: String,
  mot_file: String, // File
  tax_expiry: String,
  tax_file: String, // File
  insurance_expiry: String,
  insurance_file: String, // File
  inspection_due: String,
  service_due: String,
  tacho_calibration_due: String,
  coif_certificate_number: String,
  coif_certificate_date: String,
  hp_start_date: String,
  hp_end_date: String,
  hp_reference_no: String,
  monthly_repayment_amount: String,
  hp_company: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('VehicleAffiliate', vehicleAffiliateSchema);