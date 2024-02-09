const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mileageBandSchema = new mongoose.Schema({
  vehicle_type: { type: Schema.Types.ObjectId, ref: 'VehiculeType' },
  mileage_limit: String,
  price: String
});

module.exports = mongoose.model('MileageBand', mileageBandSchema);