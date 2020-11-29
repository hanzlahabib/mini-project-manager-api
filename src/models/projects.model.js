const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Projects = new Schema({
    name: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    userId: Number
})


module.exports = mongoose.model('Projects', Projects)