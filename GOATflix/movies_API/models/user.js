const {Schema, model} = require('mongoose');

const userSchema = Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    hearted: {type: [Object] }
});

module.exports = model('User', userSchema);