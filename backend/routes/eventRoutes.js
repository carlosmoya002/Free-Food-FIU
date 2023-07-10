import express from 'express';
import { 
    addEvent,
    updateEvent,
    getEvent,
    deleteEvent
 } from '../controllers/eventController.js';

const router = express.Router();

router.post('/addEvent', addEvent);
router.put('/updateEvent', updateEvent);
router.get('/getEvent', getEvent);
router.delete('/deleteEvent', deleteEvent);

export default router;