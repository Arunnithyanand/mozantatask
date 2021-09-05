const mongoose = require('mongoose')

const tasksschema = new mongoose.Schema({
    taskId:String,
    name: String,
    status:String
})

const mozantatasks = mongoose.model('mozantatasks', tasksschema)

module.exports = mozantatasks