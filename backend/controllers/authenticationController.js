const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUser = async (req, res) => {

    const { email, password, preferences } = req.body;

    try {

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const costFactor = 10;
        const hashedPassword = await bcrypt.hash(password, costFactor);

        // Create user
        const newUser = new User({ email, password: hashedPassword, preferences });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Registration failed' });
    }
};

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {

        // Check if user with provided email exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Create token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });

    } catch (error) {
        res.status(500).json({ message: 'Login failed' });
    }
};

module.exports = { registerUser, loginUser };