const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const port = process.env.PORT || 8080
const users = require('./routes/users.js')

// connect to the database
mongoose.connect('mongodb://localhost:27017/community')

// add bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// add static files
app.use(express.static(path.join(__dirname, '../frontend/src')))

// add the api routes
app.use('/api', users)

// start the server
app.listen(port, () => {
    console.log('Listening on port: ' + port)
})