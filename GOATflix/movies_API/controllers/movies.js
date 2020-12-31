const express = require('express');
const movies = express.Router();
const User = require('../models/users.js')
const jwt = require('jsonwebtoken');

// const auth = async (req, res, next) => {
//     const {authorization} = req.headers;

//     if(authorization) {
//         const token = authorization.split(' ')[1];
        
//         try{
//             const payload = await jwt.verify(token, SECRET)
//             req.user = payload;
//             next();
//         } catch (error) {
//             res.status(400).json(error);
//         }
//     } else {
//         res.status(400).json(new Error('no token in header'))
//     }
// }


// Index
movies.get('/', async (req, res) => {
    try {
        // attemp to grab all movies from the db
        const foundMovies = await Movie.find({});
        res.status(200).json(foundMovies);
    }catch(error){
        // this is where we will handle the error if we get one
        res.status(400).json(error);
    }
});

// CREATE
movies.post('/', async (req, res) => {
    try{
        const createdMovie = await Movie.create(req.body)
        res.status(200).json(createdMovie)
    } catch (error) {
        res.status(400).json(error);
    }
})

// DELETE
movies.delete('/:id', auth, async (req, res) => {
    try {
        const deletedMovie = await 
        Movie.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedMovie);
    } catch (error) {
        res.status(400).json(error);
    }
});


// UPDATE
movies.put('/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Show
movies.get('/:id', async (req, res) => {
    try{
        const showMovie = await Movie.findbyId(req.params.id);
        res.status(200).json(showMovie);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = movies;