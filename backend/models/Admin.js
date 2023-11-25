const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
    
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
    addedMovies: [{
        type: mongoose.Types.ObjectId,
        ref: 'Movies'
    }]
});

const admin = mongoose.model('admin', AdminSchema)
module.exports = admin