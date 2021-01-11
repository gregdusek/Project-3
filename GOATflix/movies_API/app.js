require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express ();
const PORT = process.env.PORT || 3000;
const listController = require('./controllers/list')
const MONGOURI = process.env.MONGODB_URI;


app.use(cors());
app.use(express.json());

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', (err) => {
    console.log(err.message);
});

mongoose.connection.on('disconnected', () => {
    console.log('You disconnected from Mongo')
});

mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
});

app.use('/WatchList', listController);




app.listen(PORT, () => {
    console.log('Movies playing on port ', PORT)
});