import mongoose from "mongoose";


const eventSchema = mongoose.Schema({
    name: {type: String, requied: true},
    location: {type: String, requied: true},
    description: {type: String, requied: true},
    typeOfFood: {type: String, requied: true},
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

export default Event;