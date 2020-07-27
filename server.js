const express = require('express');
const dontenv = require('dotenv');
dontenv.config();
const bootcampRoute = require('./routes/bootcamp');

const app = express();
app.use('/api', bootcampRoute);
const Port = process.env.PORT;
app.listen(
  Port,
  console.log(`${process.env.PORT} running on Dev ${process.env.NODE_ENV}`)
);
