const mongoose = require('mongoose');

const groupMigrationStudentSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'groupStudent', required: true },
    joiningDate: { type: Date, required: true }, // Use Date type for timestamps
    leftDate: { type: Date, required: true }  // Use Date type for timestamps
});

module.exports = mongoose.model('groupMigrationStudent', groupMigrationStudentSchema);