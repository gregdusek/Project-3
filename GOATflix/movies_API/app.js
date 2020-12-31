require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express ();
const PORT = process.env.PORT || 3000;
const moviesController = require('./controllers/movies')
const MONGOURI = process.env.MONGODB_URI;
const User = require('./models/user');

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

app.use('/movies', moviesController);

// app.post('/register', (req, res) => {
//     req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
//     User.create(req.body, (err, createdUser) => {
//         if(err) {
//             res.status(400).json(error)
//         }else {
//             res.status(200).json(createdUser)
//         }
//     })
// })

// app.post('/login', async (req, res) => {
//     const {username, password} = req.body;
//     try {
//         const user = await User.findOne({username})
//         if (bcrypt.compareSync(password, user.password)) {
//             // if the passwords are correct
//             // make a token
//             // send token to the user
//             // and store it in our localstorage.
//             // This allows the user to stay logged in
//             const token = jwt.sign({
//                 username: user.username
//             }, SECRET)

//             res.status(200).json({
//                 token,
//                 username, 
//                 authenticated: true
//             })
//         }
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

app.listen(PORT, () => {
    console.log('Movies playing on port ', PORT)
});