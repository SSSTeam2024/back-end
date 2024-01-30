const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
  nameParent:String,
  status: String,
  id_creation_date: Date,
  id_file: {
    data: Buffer,
    contentType: String
  },

});

module.exports = mongoose.model('Student', studentSchema);