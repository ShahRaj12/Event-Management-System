const express = require('express');
const { createEvent, getEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/events', protect, createEvent);
router.get('/events', getEvents);
router.put('/events/:id', protect, updateEvent);
router.delete('/events/:id', protect, deleteEvent);

module.exports = router;