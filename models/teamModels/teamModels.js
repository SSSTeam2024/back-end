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
    legal_card: String,
    id_card_date: String,
    id_file: String,
    service_date: String,
    statusTeam:String,
    access_level: String,
    contract_type:String,
    salary:String,
    bank_name:String,
    account_name:String,
    account_number:String,
    sort_code:String,
    email: String,
    phone: String,
    avatar: String
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);