// models/course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;