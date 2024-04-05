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
        time: String,
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
    pickUp_Time: String,
    dropOff_time: String,
    workDates: [String],
    clientID: String,
    notes_for_client: [
      {
        msg: String,
        date: String,
        sender: String,
      },
    ],
    notes_for_admin: [String],
    unit_price: String,
    total_price: String,
    journeyType:String,
    luggage:String,
    vehiculeType:String,
    program_status: [
      {
        status: String,
        date_status: String,
      },
    ],
    invoiceFrequency: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Programm", programmSchema);
