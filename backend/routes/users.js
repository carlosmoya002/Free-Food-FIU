const express = require('express')
const User = require('../models/UserModel')

const router = express.Router()

// GET all users
router.get('/', (req, res) => {
    res.json({mssg: 'GET all users'})
})

// GET an user
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single user'})
})

// POST a new user
router.post('/', async (req, res) => {

    const {name, email, password} = req.body

    try {
        const user = await User.create({name, email, password})
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE an user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an user'})
})

// UPDATE an user
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an user'})
})

module.exports = router