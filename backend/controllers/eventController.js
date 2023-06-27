const Event = require('../models/eventModel');
const mongoose = require('mongoose');

// Get all events
const getAllEvents = async (req, res) => {

    try {
        const events = await Event.find({}).sort({createdAt: -1})
        res.status(200).json(events)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Get all events with a specific value for a given field
const getEventsByField = async (req, res) => {

    const { field, value } = req.params

    try {

        let query = {};

        switch (field) {
            case 'name':
                query = { name: { $regex: new RegExp(value, 'i') } };
                break;
            case 'location':
                query = { location: { $regex: new RegExp(value, 'i') } };
                break;
            case 'organizer':
                query = { organizer: { $regex: new RegExp(value, 'i') } };
                break;
            // Add more cases for other fields as needed

            default:
                return res.status(400).json({ error: 'Invalid field' });
        }

        const events = await Event.find(query);
        res.status(200).json(events)
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

// Get a single event
const getEvent = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Event not found'})
    }

    const event = await Event.findById(id)

    if (!event) {
        return res.status(404).json({error: 'Event not found'})
    }

    res.status(200).json(event)
}

// Create new event
const createEvent = async (req, res) => {

    const {name, date, time, location, organizer, refreshments, preferences, allergies} = req.body

    // Add doc to database
    try {
        const event = await Event.create({name, date, time, location, organizer, refreshments, preferences, allergies})
        res.status(200).json({event})
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete an event
const deleteEvent = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Event not found'})
    }

    const event = await Event.findOneAndDelete({_id: id})

    if (!event) {
        return res.status(404).json({error: 'Event not found'})
    }

    res.status(200).json(event)
}

// Update an event
const updateEvent = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Event not found'})
    }

    const event = await Event.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!event) {
        return res.status(404).json({error: 'Event not found'})
    }

    res.status(200).json(event)
}

module.exports = {
    getAllEvents,
    getEventsByField,
    getEvent,
    createEvent,
    deleteEvent,
    updateEvent
}