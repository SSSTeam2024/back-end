const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const parentSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    login: String,
    password: String,
    email: String,
    phone: String,
    houseStreerNumber: String,
    deparment: String,
    country: String,
    status: String,
    card_id: Number,
    id_creation_date: String,
    id_file: String,
    card_id_file: String,
    student_id: [{ type: Schema.Types.ObjectId, ref: "Student" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Parent", parentSchema);
