const mongoose = require("mongoose");

const programmSchema = new mongoose.Schema(
  {
    programName: String,
    note:String,
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
        address: {
          placeName: String,
          coordinates: {
            lat: Number,
            lng: Number,
          },
        },
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
    journeyType:String,
    luggage:String,
    vehiculeType:String,
    freeDays_date: [String],
    exceptDays: [String],
    recommanded_capacity: String,
    extra: [String],
    notes: String,
    pickUp_Time: String,
    dropOff_time: String,
    workDates: [String],
    school_id: String,
    notes_for_client: [
      {
        msg: String,
        date: String,
        sender: String,
      },
    ],
    notes_for_admin: [
      {
        msg: String,
        date: String,
        sender: String,
      },
    ],
    unit_price: String,
    total_price: String,
    program_status: [
      {
        status: String,
        date_status: String,
      },
      
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Programm", programmSchema);
