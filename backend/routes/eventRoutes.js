import express from 'express';
import { 
    addEvent,
    updateEvent,
    getEvent,
    getAllEvents,
    getEventsByField,
    deleteEvent
 } from '../controllers/eventController.js';

const router = express.Router();

router.post('/addEvent', addEvent);
router.put('/updateEvent', updateEvent);
router.get('/getEvent', getEvent);
router.get('/', getAllEvents);
router.get('/:field/:value', getEventsByField);
router.delete('/deleteEvent', deleteEvent);

export default router;