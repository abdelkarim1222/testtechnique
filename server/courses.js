// courses.js

const express = require('express');
const Course = require('./course');

const router = express.Router();

// Endpoint pour obtenir tous les cours depuis la base de données
router.get('/', async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
