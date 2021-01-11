const express = require('express');
const list = express.Router();
const List = require('../models/list.js');


// Index
list.get('/', async (req, res) => {
    try {
        // attemp to grab all movies from the db
        const foundList = await List.find({});
        res.status(200).json(foundList);
    }catch(error){
        // this is where we will handle the error if we get one
        res.status(400).json(error);
    }
});

// CREATE
list.post('/', async (req, res) => {
    try{
        const createdList = await List.create(req.body)
        res.status(200).json(createdList)
    } catch (error) {
        res.status(400).json(error);
    }
})

// DELETE
list.delete('/:id', auth, async (req, res) => {
    try {
        const deletedList = await 
        List.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedList);
    } catch (error) {
        res.status(400).json(error);
    }
});


// UPDATE
list.put('/:id', async (req, res) => {
    try {
        const updatedList = await List.findByIdAndUpdate(
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
list.get('/:id', async (req, res) => {
    try{
        const showList = await Movie.findbyId(req.params.id);
        res.status(200).json(showMovie);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = movies;