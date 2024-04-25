const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    dateBirth: String,
    login: String,
    password: String,
    email: String,
    phone: String,
    classStudent: String,
    houseStreerNumber: String,
    deparment: String,
    country: String,
    card_id: String,
    nameParent: String,
    status_account: String,
    id_creation_date: String,
    id_file: String,
    pickUp_station:String,
    pickUp_time: String,
    pickUp_date: String,	
    DropOff_station:String,
    DropOff_time: String,
    DropOff_date: String,
    photo_id:String,
    groupId: { type: Schema.Types.ObjectId, ref: 'groupStudent' ,required:false },
    groupJoiningDate:String,
    idSchool: String,
    group:String,
    api_token: String,
    // school_id: {
    //   type: Schema.Types.ObjectId,
    //   ref: "School",
    // },
    // parent_id: { type: Schema.Types.ObjectId, ref: "Parent" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);