const User = require('../models/userModel')
const mongoose = require('mongoose')

// Get all users
const getAllUsers = async (req, res) => {

    try {
        const users = await User.find({}).sort({createdAt: -1})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get a single user
const getUser = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}
    
// Create new user
const createUser = async (req, res) => {

    const {name, email, password} = req.body

    // Add doc to database
    try {
        const user = await User.create({name, email, password})
        res.status(200).json({user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a user
const deleteUser = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findOneAndDelete({_id: id})

    if (!user) {
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

// Update a user
const updateUser = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'User not found'})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({error: 'User not found'})
    }

    res.status(200).json(user)
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
}