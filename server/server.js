const express = require('express');
const cors = require('cors');
const config = require('./config');
const db = require('./db');
const coursesRouter = require('./courses');

const app = express();
const port = 5000;

app.use(cors());
app.use('/api/courses', coursesRouter);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});