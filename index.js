const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('./config/config.json')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

mongoose.connect(config.MONGO, { useNewUrlParser: true }, (err, data) => {
    if (!err) {
        console.log("Database connected")
    }
})

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})
app.use('/api', routes)




app.listen(config.PORT || process.env.PORT, (err, data) => {
    if (!err) {
        console.log("Server running on port " + config.PORT)
    }
})