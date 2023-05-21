const express = require('express')
const router = express.Router()

// GET all events
router.get('/', (req, res) => {
    res.json({mssg: 'GET all events'})
})

// GET an event
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single event'})
})

// POST a new event
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new event'})
})

// DELETE an event
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an event'})
})

// UPDATE an event
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an event'})
})

module.exports = router