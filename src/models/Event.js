const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    capacity: { type: Number, required: true },
    availableSeats: { type: Number, required: true }
});

module.exports = mongoose.model('Event', EventSchema);
