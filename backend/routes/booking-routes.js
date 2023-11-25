const express = require('express');
const bookingRouter = express.Router;

bookingRouter.post('/', Booking);
bookingRouter.delete('/:id', deleteBooking);

module.exports = bookingRouter;