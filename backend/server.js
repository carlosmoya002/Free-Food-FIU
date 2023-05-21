require('dotenv').config()

const express = require('express')
const eventRoutes = require('./routes/events')

// Express app
const app = express()

// Port
const port = process.env.PORT

// Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/events', eventRoutes)

// Listen for requests
app.listen(port, () => {
    console.log('Listening on port ' + port)
})