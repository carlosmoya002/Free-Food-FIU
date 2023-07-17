import asyncHandler from 'express-async-handler';
import Event from '../models/eventModel.js';

// @desc    Add event
// @route   POST /api/events/addEvent
// @access  Public
const addEvent = asyncHandler(async (req, res) => {
  const {
    name,
    date,
    time,
    location,
    organizer,
    description,
    preferences,
    allergies,
  } = req.body;

  const event = await Event.create({
    name,
    date,
    time,
    location,
    organizer,
    description,
    preferences,
    allergies,
  });

  if (event) {
    res.status(201).json({
      _id: event._id,
      name: event.name,
      date: event.date,
      time: event.time,
      location: event.location,
      organizer: event.organizer,
      description: event.description,
      preferences: event.preferences,
      allergies: event.allergies,
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
    event.date = req.body.date || event.date;
    event.time = req.body.time || event.time;
    event.location = req.body.location || event.location;
    event.organizer = req.body.organizer || event.organizer;
    event.description = req.body.description || event.description;
    event.preferences = req.body.preferences || event.preferences;
    event.allergies = req.body.allergies || event.allergies;

    const updatedEvent = await event.save();

    res.json({
      _id: updatedEvent._id,
      name: updatedEvent.name,
      date: updatedEvent.date,
      time: updatedEvent.time,
      location: updatedEvent.location,
      organizer: updatedEvent.organizer,
      description: updatedEvent.description,
      preferences: updatedEvent.preferences,
      allergies: updatedEvent.allergies,
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

// @desc    Get all events
// @route   GET /api/events/
// @access  Public
const getAllEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({}).sort({ createdAt: -1 });
  res.status(200).json(events);
});

// @desc    Get events by field value
// @route   GET /api/events/:field/:value
// @access  Public
const getEventsByField = asyncHandler(async (req, res) => {
  const { field, value } = req.params;

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
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
  getAllEvents,
  getEventsByField,
  deleteEvent,
};
