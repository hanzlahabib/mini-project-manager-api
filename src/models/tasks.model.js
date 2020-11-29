const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Tasks = new Schema ({
    title: String,
    projectId: Number,
    status: Boolean, 
    userId : Number
})


module.exports = mongoose.model('Tasks', Tasks)