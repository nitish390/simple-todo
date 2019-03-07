var express = require('express')
var app = express()



var addTodo = require('./addToDo')
app.post('/addTodo', addTodo)

var getTodo = require('./getToDo')
app.get('/allTodo', getTodo)

var deleteTodo = require('./deleteToDo')
app.post('/deleteTodo', deleteTodo)

// var register = require('./register')
// app.post('/register', register)

// var login = require('./login')
// app.post('/login', login)



module.exports = app