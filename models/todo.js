const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  image_path: String,
});

module.exports = mongoose.model('Todo', todoSchema);
