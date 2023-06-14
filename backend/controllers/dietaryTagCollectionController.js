const Event = require('../models/dietaryTagsModel');
const mongoose = require('mongoose');

// Get all dietary tag collections
const getAllDietaryTagsCollections = async (req, res) => {

    try {
        const dietaryTags = await DietaryTags.find({}).sort({createdAt: -1})
        res.status(200).json(dietaryTags)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get a single dietary collection
const getDietaryTagCollection = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Dietary tag collection not found'})
    }

    const dietaryTag = await DietaryTags.findById(id)

    if (!dietaryTag) {
        return res.status(404).json({error: 'Dietary tag collection not found'})
    }

    res.status(200).json(dietaryTag)
}

// Create new dietary tag collection
const createDietaryTagCollection = async (req, res) => {

    const {dietFlags, allergyFlags} = req.body

    // Add doc to database
    try {
        const dietaryTag = await DietaryTags.create({dietFlags, allergyFlags})
        res.status(200).json({dietaryTag})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a dietary tag collection
const deleteDietaryTagCollection = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Dietary tag not found'})
    }

    
