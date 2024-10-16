var mongoose = require('mongoose')

const Schema = new mongoose.Schema({

    name: String,
    surname: String
})

module.exports = mongoose.model('UserM', Schema)