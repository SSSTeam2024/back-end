const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
        address: {
          placeName: String,
          coordinates: {
            lat: String,
            lng: String
          }
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
    freeDays_date: [String],
    exceptDays: [String],
    recommanded_capacity: String,
    extra: [String],
    notes: String,
    pickUp_Time: String,
    dropOff_time: String,
    workDates: [String],
    company_id: { type: Schema.Types.ObjectId, ref: "Company", default: null },
    school_id: { type: Schema.Types.ObjectId, ref: "School", default: null },
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
    program_status: [
      {
        status: String,
        date_status: String,
      },
    ],
    invoiceFrequency: String,
    status: String,
    within_payment_days: String,
    students_groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'groupStudent'}],
    employees_groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'groupEmployee'}],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Programm", programmSchema);
