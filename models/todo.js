var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todo = new Schema({
    taskName: String,
    taskDesc: String,
    createdAt: Date,
    status : {type: Boolean, default : false}
})

module.exports = mongoose.model('todo', todo)