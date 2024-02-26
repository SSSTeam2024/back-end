const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waitingBandSchema = new mongoose.Schema({
  vehicle_type: { type: Schema.Types.ObjectId, ref: 'VehiculeType' },
  hours_limit: String,
  price: String
});

module.exports = mongoose.model('WaitingBand', waitingBandSchema);