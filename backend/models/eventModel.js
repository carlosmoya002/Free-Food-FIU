import mongoose from "mongoose";


const eventSchema = mongoose.Schema({
    name: {type: String, requied: true},
    date: {type: String, require: true},
    time: {type: String, required: true},
    location: {type: String, requied: true},
    organizer: {type: String, requied: true},
    description: {type: String, requied: true},
    preferences: {type: [String], required: true},
    allergies: {type: [String], required: true},
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;