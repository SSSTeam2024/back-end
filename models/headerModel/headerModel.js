const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const headerSchema = new mongoose.Schema({
  logo: String,
  logo_link: String,
  phone_label: String,
  phone_value: String,
  email_label: String,
  email_value: String,
  button_text: String,
  button_link: String,
  color: String,
  address_label: String,
  address_value: String,
  phone_display: String,
  email_display: String,
  button_display: String,
  address_display: String,
});

module.exports = mongoose.model("Header", headerSchema);
