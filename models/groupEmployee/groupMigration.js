const mongoose = require('mongoose');

const groupMigrationSchema = new mongoose.Schema({
    id_employee: String,
    id_group:String,
    joiningDate:String,
    leftDate:String
    
});

module.exports = mongoose.model('groupMigration', groupMigrationSchema);