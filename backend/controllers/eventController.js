import asyncHandler from 'express-async-handler';
import Event from '../models/eventModel.js';

// @desc    Add event
// @route   POST /api/events/addEvent
// @access  Public
const addEvent = asyncHandler(async (req, res) => {
    const {name, location, description, typeOfFood} = req.body;

    const event = await Event.create({
        name,
        location,
        description,
        typeOfFood,
    });

    if (event) {
        res.status(201).json({
            _id: event._id,
            name: event.name,
            location: event.location,
            description: event.description,
            typeOfFood: event.typeOfFood,
        });
    } else {
        res.status(400);
        throw new Error('Invalid event data');
    }
});  
  
// @desc    Update event
// @route   PUT /api/events/updateEvent
// @access  Public
const updateEvent = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.body._id);
  
    if (event) {
      event.name = req.body.name || event.name;
      event.location = req.body.location || event.location;
      event.description = req.body.description || event.description;
      event.typeOfFood = req.body.typeOfFood || event.typeOfFood;
  
      const updatedEvent = await event.save();
  
      res.json({
        _id: updatedEvent._id,
        name: updatedEvent.name,
        location: updatedEvent.location,
        description: updatedEvent.description,
        typeOfFood: updatedEvent.typeOfFood,
      });
    } else {
      res.status(404);
      throw new Error('Event not found');
    }
  });

// @desc    Get event
// @route   GET /api/events/getEvent
// @access  Public
const getEvent = asyncHandler(async (req, res) => {
    const events = await Event.find({});
  
    if (events) {
      res.json(events);
    } else {
      res.status(404);
      throw new Error('No events found');
    }
  });

// @desc    Delete event
// @route   DELETE /api/events/deleteEvent
// @access  Public
const deleteEvent = asyncHandler(async (req, res) => {
    const eventId = req.body._id;
    const deletedEvent = await Event.findByIdAndDelete(eventId);

    if (deletedEvent) {
        res.json({ message: 'Event deleted successfully' });
    } else {
        res.status(404);
        throw new Error('Event not found');
    }
});

 
export { 
    addEvent,
    updateEvent,
    getEvent,
    deleteEvent
 };