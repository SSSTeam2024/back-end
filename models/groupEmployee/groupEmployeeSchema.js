const mongoose = require('mongoose');

const groupEmployeeSchema = new mongoose.Schema({
    groupName: String,
    note:String,
    startPoint: String,
    dateStart: String,
    timeStart: String,
    Destination: String,
    dateEnd: String,
    timeEnd: String,
    status: String,
    passenger_number: String,
    id_company: String,
    luggage_details:String,
    vehicle_type:String,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
    program: { type: mongoose.Schema.Types.ObjectId, ref: 'Programm',required:false  },
});

module.exports = mongoose.model('groupEmployee', groupEmployeeSchema);