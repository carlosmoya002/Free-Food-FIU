// The entry file for the backend application
// It is where we register the express app

require('dotenv').config() // Requiring the dotenv package (to use the .env file)

const express = require('express') // Requiring the express package

// Express app
const app = express()

// Port
const port = process.env.PORT

// Middleware
// req = request -> contains info about the request
// res = response -> response object we use to send a response back to the client/browser
// next() -> function that we call when we are done with the middleware to move on to the next middleware
app.arguments((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
// app.get() -> get request
app.get('/', (req, res) => {
    // Using the response object to send a response back to the client
    res.json({mssg: 'Welcome to the app'})
})

// Listen for requests
app.listen(port, () => {
    console.log('Listening on port ' + port)
})