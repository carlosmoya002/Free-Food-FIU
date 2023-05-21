const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventsSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    location: {
        type: String,
        required: true
    }

}, {timestamps:true})

module.exports = mongoose.model('events', eventsSchema)

