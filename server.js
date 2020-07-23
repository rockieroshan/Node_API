const express = require('express');
const dontenv = require('dotenv');

dontenv.config();

const app = express();

const Port = process.env.PORT;
app.listen(
  Port,
  console.log(`${process.env.PORT} running on Dev ${process.env.NODE_ENV}`)
);
