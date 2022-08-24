const mongoose = require('mongoose');
const UserScheme = new mongoose.Schema({
    name: {
        type: String
    },
    username:{
        type: String
    },
    password:{
        type: String
    }},
    {timestamps: true,
    versionkey: false});
module.exports = mongoose.model('users', UserScheme);