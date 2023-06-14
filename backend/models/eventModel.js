const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        require: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    refreshments: {
        type: String,
        required: false
    },
    preferences: {
        type: [String],
        required: true
    },
    allergies: {
        type: [String],
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)