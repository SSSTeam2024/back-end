const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  civilStatus: String,
  positionTitle: String,
  idCompany: { type: Schema.Types.ObjectId, ref: "Company", default: null },
  gender: String,
  address: String,
  station: String,
  mobile: String,
  email: String,
  photos: String,
  dateOfBirth: String,
  legalcard: String,
  username: String,
  groupId: { type: Schema.Types.ObjectId, ref: "groupEmployee", default: null },
  groupJoiningDate: String,
  login: String,
  password: String,
  nationality: String,
  status: String,
  api_token: String,
  stop_point: {
    type: {
      coordinates: {
        lat: String,
        lng: String,
      },
      placeName: String,
    },
    default: null,
  },
  onesignal_api_key: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
