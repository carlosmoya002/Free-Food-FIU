const express = require('express');
const { 
    registerUser,
    loginUser 
} = require('../controllers/authenticationController');

const router = express.Router();

// POST register a new user
router.post('/register', registerUser);

// POST login a user
router.post('/login', loginUser);

module.exports = router;