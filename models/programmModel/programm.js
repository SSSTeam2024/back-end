const mongoose = require("mongoose");

const programmSchema = new mongoose.Schema(
  {
    programName: String,
    origin_point: {
      placeName: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    stops: [
      {
        id: String,
        address: String,
      },
    ],
    destination_point: {
      placeName: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    pickUp_date: String,
    droppOff_date: String,
    freeDays_date: [String],
    exceptDays: [String],
    recommanded_capacity: String,
    extra: [String],
    notes: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Programm", programmSchema);
