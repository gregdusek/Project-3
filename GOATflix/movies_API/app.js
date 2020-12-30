require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express ();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Movies playing on port ', PORT)
});