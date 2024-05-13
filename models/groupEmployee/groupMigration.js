const mongoose = require('mongoose');

const groupMigrationSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'groupEmployee', required: true },
    joiningDate: { type: Date, required: true }, // Use Date type for timestamps
    leftDate: { type: Date, required: true }  // Use Date type for timestamps
});

module.exports = mongoose.model('groupMigration', groupMigrationSchema);