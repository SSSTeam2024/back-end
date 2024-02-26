const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  experience_satisfaction_scale: Number,
  booking_process: String,
  most_enjoyed: String,
  service_quality_scale: String,
  choosen_reason: String,
  trip_overall_rating: String,
  website_navigation: String,
  id_coorporate: String,
  id_student: String,
  id_parent: String,
  id_visitor: String,
});

module.exports = mongoose.model('Feedback', feedbackSchema);