const mongoose = require("mongoose");

const driverAffiliateSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    email: String,
    profile_image: String,
    firstname: String,
    surname: String,
    birthdate: String,
    jobtype: String,
    joindate: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalcode: String,
    driverStatus: String,
    language: String,
    nationality: String,
    phonenumber: String,
    emergency_contact: String,
    //
    bank_name: String,
    account_name: String,
    account_number: String,
    sort_code: String,
    //
    driver_license: String,
    driving_license_expiry: String,
    dqc: String,
    dqc_expiry: String,
    dbscheck: String,
    dbs_issue_date: String,
    dbs_badge_date: String,
    pvc_expiry: String,
    contract: String,
    deposti_held: String,
    notes: String,
    api_token: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DriverAffiliate", driverAffiliateSchema);