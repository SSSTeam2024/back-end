const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    civilStatus:String,
    positionTitle:String,
    idCompany: String,
    gender: String,
    address: String,
    station: String,
    mobile: String,
    email: String,
    photos: String,
    dateOfBirth: String,
    legalcard: String,
    username: String,
    groupId: { type: Schema.Types.ObjectId, ref: 'groupEmployee' ,required:false },
    groupJoiningDate:String,
    login: String,
    password:String,
    nationality:String, 
    status:String
});

module.exports = mongoose.model('Employee', employeeSchema);