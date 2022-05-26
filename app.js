require('dotenv').config()

const express = require('express')
const app = express()
const server = require('http').Server(app)

// We use the next lines to obtain JSON request and be able to parse it for POST methods
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// We serve static files form public folder
app.use(express.static('public'))

//Routes
app.use('/' + process.env.API_VERSION, require('./src/api/app/routes'))

// Starting server
server.listen(process.env.PORT, function () {
  console.log('Server running at ' + process.env.LOCAL_URL + ':' + process.env.PORT)
})