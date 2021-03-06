require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/phase-2-${process.env.NODE_ENV}`, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

const index = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', index);

module.exports = app
