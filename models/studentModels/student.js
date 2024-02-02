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
    card_id: Number,
    nameParent: String,
    status: String,
    id_creation_date: String,
    id_file: String,
    school_id: {
      type: Schema.Types.ObjectId,
      ref: "School",
    },
    parent_id: { type: Schema.Types.ObjectId, ref: "Parent" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
