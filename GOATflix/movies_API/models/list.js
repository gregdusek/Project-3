const {Schema, model} = require('mongoose');

const listSchema = Schema({
    title: {type: String, required: true},
});

module.exports = model('List', listSchema);