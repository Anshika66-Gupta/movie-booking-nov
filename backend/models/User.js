const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
        minLenght: 6
    },
    
    bookings: [{
        type: mongoose.Types.ObjectId,
        ref:'Booking'
    }]
})
const user = mongoose.model('user', UserSchema)
module.exports = user;