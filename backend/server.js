require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const eventRoutes = require('./routes/users')

// Env vars
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

// Express app
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/users', eventRoutes)

/// Connect to database
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to database')
        // Listen for requests
        app.listen(PORT, () => {
        console.log('Listening on port ' + PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })