const mongoose = require('mongoose');

const groupSchoolSchema = new mongoose.Schema({
    groupName: String,
    note:String,
    startPoint: String,
    dateStart: String,
    timeStart: String,
    Destination: String,
    dateEnd: String,
    timeEnd: String,
    status: String,
    id_school: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    program: { type: mongoose.Schema.Types.ObjectId, ref: 'Programm',required:false  },
});

module.exports = mongoose.model('groupStudent', groupSchoolSchema);