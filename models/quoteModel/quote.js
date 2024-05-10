const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new mongoose.Schema(
  {
    id_schedule: String,
    id_affiliate_driver: { type: Schema.Types.ObjectId, ref: "DriverAffiliate", default: null },
    id_affiliate_vehicle: { type: Schema.Types.ObjectId, ref: "VehicleAffiliate", default: null },
    affiliate_id: { type: Schema.Types.ObjectId, ref: "Affiliate", default: null },
    company_id: { type: Schema.Types.ObjectId, ref: "Company", default: null },
    school_id: { type: Schema.Types.ObjectId, ref: "School", default: null },
    owner: String,
    handled_by: Number,
    id_group_employee : { type: Schema.Types.ObjectId, ref: "groupEmployee", default: null },
    id_group_student : { type: Schema.Types.ObjectId, ref: "groupStudent", default: null },
    id_affiliate: { type: Schema.Types.ObjectId, ref: "Affiliate", default: null },
    white_list: [
     { type: Schema.Types.ObjectId, ref: "Affiliate", default: null },
      ],
    id_driver: { type: Schema.Types.ObjectId, ref: "Driver", default: null },
    id_vehicle: { type: Schema.Types.ObjectId, ref: "Vehicle", default: null },
    handled_by_subcontractor: String, //id of subcontractor
    id_visitor: { type: Schema.Types.ObjectId, ref: "Visitor", default: null },
    vehicle_type: String,
    passengers_number: Number,
    luggage_details: String,
    journey_type: String,
    notes: String,
    heard_of_us: String,
    pushed_price: String,
    id_invoice: String,
    paid_by_client: Boolean,
    paid_by_bouden: Boolean,
    status: String,
    progress: String,
    balance: String,
    deposit_percentage: String,
    manual_cost: String,
    automatic_cost: String,
    deposit_amount: String,
    total_price: String,
    start_point: {
      placeName: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    pickup_time: String,
    real_start_time: String,
    start_delay_time: String,
    mid_stations: Array, /// Array of objects {id_stop , time (up/down), qr_code}
    delays: Array, /// Array of objects {id_delay startTime , cause ...}
    change_route: {
      time: String,
      position: {
        placeName: String,
        coordinates: {
          lat: Number,
          lng: Number,
        },
      },
      cause: String,
      delay: String,
    },
    dropoff_time: String,
    dropoff_date: String,
    destination_point: {
      placeName: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
    },
    type: String, // One way or return
    //? estimated_return_start_time: String,
    checklist_id: { type: Schema.Types.ObjectId, ref: "CheckList", default: null }, //* Duty Vehicle Check List updated by driver after complete his check
    date: String,
    return_date: String,
    return_time: String,
    category: String, //TODO: private_hire_job or regular NB: TO ADD TO CONTROLLER
    enquiryDate: String,
    pushedDate: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", quoteSchema);
