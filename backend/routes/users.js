const express = require('express')
const {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')

const router = express.Router()

// GET all users
router.get('/', getAllUsers)

// GET an user
router.get('/:id', getUser)

// POST a new user
router.post('/', createUser)

// DELETE an user
router.delete('/:id', deleteUser)

// UPDATE an user
router.patch('/:id', updateUser)

module.exports = router