const mongoose = require("mongoose");
const teamSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    birth_date: String,
    nationality: String,
    gender: String,
    login: String,
    address: String,
    password: String,
    marital_status: String,
    number_of_childs: String,
    legal_card: Number,
    legal_card_date: String,
    id_file: String,
    service_date: String,
    status:String,
    access_level: [String],
    contract_type:String,
    salary:String,
    email: String,
    phone: String,
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);