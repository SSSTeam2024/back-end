const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contractSchema = new mongoose.Schema({
  contractName: String,
  invoiceFrequency: String,
  customerNotes: String,
  staffNotes: String,
  prices: String,
  unit_price: String,
  salesperson: { type: Schema.Types.ObjectId, ref: "Team" },
  idProgram: { type: Schema.Types.ObjectId, ref: "Programm" },
  idSchool: String,
  idCompany: String,
  vehicleType: { type: Schema.Types.ObjectId, ref: "VehiculeType" },
  journeyType: { type: Schema.Types.ObjectId, ref: "Journey" },
  luggageDetails: { type: Schema.Types.ObjectId, ref: "Luggage" },
  contractRef:String,
  contractStatus: String,
  accountRef: String,
  accountName: String,
  accountEmail: String,
  accountPhone: String,
  paymentMethod: String,
  effectiveDate: String,
  within_payment_days: String,
  contract_number: String,
  subTotal: String,
  tva: String,
},
{
  timestamps: true,
});

module.exports = mongoose.model("Contract", contractSchema);
