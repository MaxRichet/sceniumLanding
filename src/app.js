const express = require('express');
require('dotenv').config();
const app = express();
const port = 5001;

const mongoose = require('mongoose');

const cors = require('cors');

app.use(cors({
  origin: '*',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());

mongoose.connect('mongodb://mongodb:27017/emailscenium');

app.use(express.urlencoded());
app.use(express.json());

const sendemailRoute = require(`./routes/emailRoute`);

app.use('/', sendemailRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});